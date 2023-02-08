import axios from 'axios';
import { useEffect, useState } from 'react';
import './ValorantWeapons.css';

export function ValorantWeapons() {
  interface IWeapons {
    status: string;
    data: [
      {
        uuid: string;
        displayName: string;
        category: string;
        defaultSkinUuid: string;
        displayIcon: string;
        killStreamIcon: string;
        assetPath: string;
        weaponStats: {
          fireRate: number;
          magazineSize: string;
          runSpeedMultiplier: number;
          equipTimeSeconds: number;
          reloadTimeSeconds: number;
          firstBulletAccuracy: number;
          shotgunPelletCount: number;
          wallPenetration: string;
          feature: string;
          fireMode: string;
          altFireType: string;
          adsStats: {
            zoomMultiplier: number;
            fireRate: number;
            runSpeedMultiplier: number;
            burstCount: string;
            firstBulletAccuracy: number;
          };
          altShotgunStats: {
            shotgunPelletCount: string;
            burstRate: number;
          };
          airBurstStats: {
            shotgunPelletCount: string;
            burstDistance: number;
          };
          damageRanges: [
            {
              rangeStartMeters: number;
              rangeEndMeters: number;
              headDamage: number;
              bodyDamage: number;
              legDamage: number;
            }
          ];
        };

        shopData: {
          cost: string;
          category: string;
          categoryText: string;
          gridPosition: {
            row: string;
            column: string;
          };
          canBeTrashed: boolean;
          image: string;
          newImage: string;
          newImage2: string;
          assetPath: string;
        };
        skins: [
          {
            uuid: string;
            displayName: string;
            themeUuid: string;
            contentTierUuid: string;
            displayIcon: string;
            wallpaper: string;
            assetPath: string;
            chromas: [
              {
                uuid: string;
                displayName: string;
                displayIcon: string;
                fullRender: string;
                swatch: string;
                streamedVideo: string;
                assetPath: string;
              }
            ];
            levels: [
              {
                uuid: string;
                displayName: string;
                levelItem: string;
                displayIcon: string;
                streamedVideo: string;
                assetPath: string;
              }
            ];
          }
        ];
      }
    ];
  }

  const [APIWeapons, setAPIWeapons] = useState<IWeapons>();

  useEffect(() => {
    if (APIWeapons) {
      if (APIWeapons.data.length > 0) return;
    } else
      axios
        .get('https://valorant-api.com/v1/weapons')
        .then((res) => {
          setAPIWeapons(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);
  return (
    <div className="weapons">
      {APIWeapons?.data.map((weapons) => {
        return (
          <div className="weapon" key={weapons.displayName}>
            <p>{weapons.displayName}</p>
            <img
              className="weaponImg"
              src={weapons.displayIcon}
              alt={weapons.displayName}
            />
          </div>
        );
      })}
    </div>
  );
}
