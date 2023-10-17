import axios from 'axios';
import { useEffect, useState } from 'react';
import './FortniteShop.css';

export function FortniteShop() {
  interface IShop {
    status: number;
    data: {
      hash: string;
      date: string;
      vbuckIcon: string;
      featured: {
        name: string;
        entries: [
          {
            regularPrice: number;
            finalprice: number;
            bundle: {
              name: string;
              info: string;
              image: string;
            };
            banner: {
              value: string;
              intensity: string;
              backendValue: string;
            };
            giftable: boolean;
            refundable: boolean;
            sortPriority: number;
            categories: string[];
            sectionId: string;
            section: {
              id: string;
              name: string;
              index: number;
              landingPriority: number;
              sortOffersByOwnership: boolean;
              showIneligibleOffers: boolean;
              showIneligibleOffersIfGiftable: boolean;
              showTimer: boolean;
              enableToastNotification: boolean;
              hidden: boolean;
            };
            devName: string;
            offerId: string;
            displayAssetPath: string;
            tileSize: string;
            newDisplayAssetPath: string;
            newDisplayAsset: {
              id: string;
              cosmeticId: string;
              materialInstances: [
                {
                  id: string;
                  Images: string;
                  Colors: string;
                  Scalings: string;
                  Flags: string;
                }
              ];
            };
            items: [
              {
                id: string;
                name: string;
                description: string;
                type: {
                  value: string;
                  displayValue: string;
                  backendValue: string;
                };
                rarity: {
                  value: string;
                  displayValue: string;
                  backendValue: string;
                };
                series: {
                  value: string;
                  image: string;
                  colors: string[];
                  backendValue: string;
                };
                set: {
                  value: string;
                  text: string;
                  backendValue: string;
                };
                introduction: {
                  chapter: string;
                  season: string;
                  text: string;
                  backendValue: string;
                };
                images: {
                  smallIcon: string;
                  icon: string;
                  featured: string;
                  Other: string;
                };
                variants: [
                  {
                    channel: string;
                    type: string;
                    options: [
                      {
                        tag: string;
                        name: string;
                        image: string;
                      }
                    ];
                  }
                ];
                searchTags: string[];
                gameplayTags: string[];
                metaTags: string[];
                showcaseVideo: string;
                dynamicPakId: string;
                displayAssetPath: string;
                definitionPath: string;
                path: string;
                added: string;
                shopHistory: string[];
              }
            ];
          }
        ];
      };
      daily: {
        name: string;
        entries: [
          {
            regularPrice: number;
            finalPrice: number;
            bundle: {
              name: string;
              info: string;
              image: string;
            };
            banner: {
              value: string;
              intensity: string;
              backendValue: string;
            };
            giftable: boolean;
            refundable: boolean;
            sortPriority: number;
            categories: string[];
            sectionId: string;
            section: {
              id: string;
              name: string;
              index: number;
              landingPriority: number;
              sortOffersByOwnership: boolean;
              showIneligibleOffers: boolean;
              showIneligibleOffersIfGiftable: boolean;
              showTimer: boolean;
              enableToastNotification: boolean;
              hidden: boolean;
            };
            devName: string;
            offerId: string;
            displayAssetPath: string;
            tileSize: string;
            newDisplayAssetPath: string;
            newDisplayAsset: {
              id: string;
              cosmeticId: string;
              materialInstances: [
                {
                  id: string;
                  Images: string;
                  Colors: string;
                  Scalings: string;
                  Flags: string;
                }
              ];
            };
            items: [
              {
                id: string;
                name: string;
                description: string;
                type: {
                  value: string;
                  displayValue: string;
                  backendValue: string;
                };
                rarity: {
                  value: string;
                  displayValue: string;
                  backendValue: string;
                };
                series: {
                  value: string;
                  image: string;
                  colors: string[];
                  backendValue: string;
                };
                set: {
                  value: string;
                  text: string;
                  backendValue: string;
                };
                introduction: {
                  chapter: string;
                  season: string;
                  text: string;
                  backendValue: number;
                };
                images: {
                  smallIcon: string;
                  icon: string;
                  featured: string;
                  Other: string;
                };
                variants: [
                  {
                    channel: string;
                    type: string;
                    options: [
                      {
                        tag: string;
                        name: string;
                        image: string;
                      }
                    ];
                  }
                ];
                searchTags: string[];
                gameplayTags: string[];
                metaTags: string[];
                showcaseVideo: string;
                dynamicPakId: string;
                displayAssetPath: string;
                definitionPath: string;
                path: string;
                added: string;
                shopHistory: string[];
              }
            ];
          }
        ];
      };
    };
  }

  const [APIShop, setAPIShop] = useState<IShop>();

  useEffect(() => {
    // if (APIShop) {
    //   if (APIShop.data.length > 0) return;
    // } else
    axios
      .get('https://fortnite-api.com/v2/shop/br')
      .then((res) => {
        setAPIShop(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const date = APIShop?.data.date;
  const finaldate = date?.slice(0, 10);

  return (
    <div className="shopboxo">
      <h1>Fortnite Shop</h1>

      <h2> Latest updated at: {finaldate}</h2>

      {APIShop?.data.featured.entries.map((bundle) => {
        return (
          <div className="shopbox" key={bundle.devName}>
            {bundle.items.map((item) => {
              // fixing colors on rarity
              var color;
              var border;
              if (item.rarity.backendValue === 'EFortRarity::Uncommon') {
                color = 'radial-gradient(#6abb1e,#175117)';
                border = '3px solid #88e339';
              } else if (item.rarity.backendValue === 'EFortRarity::Rare') {
                color = 'radial-gradient(#2cc0ff,#143877)';
                border = '3px solid #37d0ff';
              } else if (item.rarity.backendValue === 'EFortRarity::Epic') {
                color = 'radial-gradient(#c359ff,#4c2483)';
                border = '3px solid #ea5eff';
              } else if (
                item.rarity.backendValue === 'EFortRarity::Legendary'
              ) {
                color = 'radial-gradient(#ea8d23,#78371d)';
                border = '3px solid #e98d4b';
              } else {
                color = 'yellow';
              }

              return (
                <div
                  className="itemBox"
                  key={item.id}
                  style={{
                    border: `${border}`,
                    background: `${color}`,
                  }}
                >
                  <img
                    className="itemImg"
                    src={item.images.smallIcon}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
