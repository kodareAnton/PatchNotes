import axios from "axios";
import { useEffect, useState } from "react";

export function FortniteShop() {
  interface Shop {
    daily: {
      entries: {
        banner: null;
        bundle: null;
        categories?: [];
        devName: string;
        displayAssetPath: null;
        finalPrice: number;
        giftable: boolean;
        items: {
          id: string;
        };
      };
    };
    date: string;
    featured: {};
    hash: string;
    specialDaily?: string;
    specialFeatured?: {};
    vbuckIcon: string;
    voteWinners?: string;
    votes?: string;
  }

  const [Shop, setShop] = useState();

  useEffect(() => {
    axios
      .get("https://fortnite-api.com/v2/Shop/br")
      .then((res) => {
        console.log(res.data.data);
        setShop(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <></>;
}
