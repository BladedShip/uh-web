const FEATURES: Feature[] = [
    {
        title: "PPG sensor",
        description:
            "The Ultrahuman Ring AIR empowers you to stay on top of your body's vitals such as heart rate, heart rate variability, blood oxygen saturation and more.",
        image: "/ring-feature.png",
        tags: ["PPG Sensors"],
        features: ["6-axis motion sensor", "hypoallergenic smooth inner shell", "Strong from the outside"],
    },
    {
        title: "6-axis motion sensor",
        description:
            "The Ultrahuman Ring AIR empowers you to stay on top of your body's vitals such as heart rate, heart rate variability, blood oxygen saturation and more.",
        image: "/ring-feature.png",
        tags: ["PPG Sensors"],
        features: ["6-axis motion sensor", "hypoallergenic smooth inner shell", "Strong from the outside"],
    },
    {
        title: "Hypoallergenic smooth inner shell",
        description:
            "The Ultrahuman Ring AIR empowers you to stay on top of your body's vitals such as heart rate, heart rate variability, blood oxygen saturation and more.",
        image: "/ring-feature.png",
        tags: ["PPG Sensors"],
        features: ["6-axis motion sensor", "hypoallergenic smooth inner shell", "Strong from the outside"],
    },
    {
        title: "Strong from the outside",
        description:
            "The Ultrahuman Ring AIR empowers you to stay on top of your body's vitals such as heart rate, heart rate variability, blood oxygen saturation and more.",
        image: "/ring-feature.png",
        tags: ["PPG Sensors"],
        features: ["6-axis motion sensor", "hypoallergenic smooth inner shell", "Strong from the outside"],
    },
];

const MORE_FEATURES: MoreFeature[] = [
    {
        title: "Wake up to your sleep insights",
        description: "Power up your online and in person interview rounds with Unberry AI assisted interviews.",
        image: "/wake-up.png",
        link: "/",
    },
    {
        title: "Temperature tracking made easy",
        description:
            "Deploy Fully Automated Interviews as pre-screening layer enabling first line of automated screening.",
        image: "/temperature.png",
        link: "/",
    },
];

const EVEN_MORE_FEATURES: EvenMoreFeature[] = [
    {
        title: "Precision engineering at the UltraFactory",
        description:
            "Ultrahuman's integrated production facility ensures gold-standard performance testing, providing complete control.",
        image: "/precision.svg",
    },
    {
        title: "More accurate from the Finger than the Wrist",
        description:
            "The finger, with its higher perfusion index and arterioles, serves as a richer and more accurate source of biomarker information.",
        image: "/accurate.svg",
    },
    {
        title: "Trusted by the World's #1 Ranked Cycling Team and more",
        description: "UAE Team Emirates, Team ADQ, and many other high-performance teams worldwide.",
        image: "/trust.svg",
    },
    {
        title: "Precision engineering at the UltraFactory",
        description:
            "Ultrahuman's integrated production facility ensures gold-standard performance testing, providing complete control.",
        image: "/precision-returns.svg",
    },
];

const PRICE_ADDONS = {
    charger: {
        voyager: 3799,
        free: 0,
    },
    tradeIn: {
        "uh-air": -7200,
        "uh-r1": -5400,
        "og-3": -4200,
        "og-2": -2100,
    },
    engraving: {
        true: 3299,
        false: 0,
    },
    powerPlug: {
        "cardio-1": 2499,
        "cardio-2": 3998,
        none: 0,
    },
    coverage: {
        "2-years": 4400,
        "1-year": 2988,
        none: 0,
    },
};

const PRICE_ADDONS_LABELS = {
    charger: {
        voyager: "Voyager",
        free: "Free",
    },
    tradeIn: {
        "uh-air": "Ultrahuman Ring AIR",
        "uh-r1": "Ultrahuman Ring R1",
        "og-3": "Oura Gen-3",
        "og-2": "Oura G-2",
    },
    color: {
        rt: "Raw Titanium",
        ab: "Aster Black",
        mg: "Matte Grey",
        bg: "Bionic Gold",
        ss: "Space Silver",
    },
    powerPlug: {
        "cardio-1": "Cardio Adaptability - 1 Year",
        "cardio-2": "Cardio Adaptability - 2 Years",
        none: "None",
    },
    coverage: {
        "2-years": "2 Years Coverage",
        "1-year": "1 Year Coverage",
        none: "None",
    },
};

export { FEATURES, MORE_FEATURES, EVEN_MORE_FEATURES, PRICE_ADDONS, PRICE_ADDONS_LABELS };
