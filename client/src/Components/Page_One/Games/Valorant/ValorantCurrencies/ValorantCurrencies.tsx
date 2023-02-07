export function ValorantCurrencies() {
  interface ICurrencies {
    status: string;
    data: [
      {
        uuid: string;
        displayName: string;
        displayNameSingular: string;
        displayIcon: string;
        largeIcon: string;
        assetPath: string;
      }
    ];
  }

  //   const [APITiers, setAPITiers] = useState<ITiers>();

  //   useEffect(() => {
  //     if (APITiers) {
  //         if (APITiers.data.length > 0) return;
  //       } else
  //     axios
  //       .get('https://valorant-api.com/v1/contenttiers')
  //       .then((res) => {
  //         setAPITiers(res.data);
  //         console.log(res.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);
  return <></>;
}
