import React from "react";
import ReactDOM from "react-dom";

/*
  // core way of creating react element or obj:
  const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I am an h1 tag"),
      React.createElement("h2", {}, "hey there!"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "Hot module Replacement"),
      React.createElement("h2", {}, "hello"),
    ])
  );

  // const heading = React.createElement("h1", {}, "Hello React!");
  // const root = ReactDOM.createRoot(document.getElementById("root"));

  const root = ReactDOM.createRoot(document.getElementById("root"));

  // root.render(heading);
  root.render(parent);
  */

// const headings = (
//   <div>
//     <h1>Hello JSX!</h1>
//     <h2>Hello JSX2!</h2>
//   </div>
// );

/*const HeadingComponent = () => {
    return <h1>Hello Functional Component!</h1>;
  };*/

//When you are creating functional component use arrow function: convention
// const Title = () => <h1 className="heading">Hello from Arrow Function!</h1>;

// const elem = <span>React Element! </span>;
// const title = <h1 className="heading">{elem}I am JavaScript Variable!</h1>;

/*
  //Normal function (Anonymous)
  const Title = function () {
    return <h1>Hello From Normal Function</h1>;
  };



  // Component Compostion: Merging two components
  const HeadingComponent = () => (
    <div id="container">
      {/* Use {curlyBraces} for JS ==> This will help to get rid of malicius data => From some random api}*/
//     <h2>{console.log("I am JavaScript inside JSX!")}</h2>
//     {/* <Title /> */}
//     {title}
//     <h1 className="heading">Hello Functional Component!</h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);

// const heading = React.createElement("div", { id: "cantainer" }, [
//   React.createElement("h1", { className: "title" }, "Hello 1!"),
//   React.createElement("h1", { className: "title" }, "Hello 2!"),
// ]);

// const Heading = () => (
//   // <div id={props.id}>
//   <div id="parent">
//     {/* <h1 className={props.className}>Hello 1!</h1>
//     <h1 className={props.className}>Hello 2!</h1> */}
//     <h1 className="title">Hello 1!</h1>
//     <h1 className="title">Hello 2!</h1>
//   </div>
// );

// const FunctionalComponent = () => <Heading />;

// Will not work like this:
// {
//   <title />;
// }
// return title;
// return <Heading id="parent" className="title" />;
// return <Heading />;

// Will not work like this:
// {
//   <Heading />;
// }
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<FunctionalComponent />);

// const HeaderComponent = () => (
//   <div id="container">
//     <header>
//       <img src="/motorcycle-1905281_640.jpg" />
//     </header>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeaderComponent />);

// Food ordering app:

/**
 *  Header
 *   --> Logo
 *   --> Nav Items
 * Body
 *   --> Search
 *   --> RestaurantContainer
 *     --> RestaurantCard
 * Footer
 *   --> Copyright
 *   --> Links
 *   --> Address
 *   --> Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXm-Lz1wqab2UY4q-vR2b1nEBH3NHEPpIsA&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisinesn,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          loudinaryImageId
        }
        alt="Restaurant Image"
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const restObj = [
  {
    info: {
      id: "575285",
      name: "Wendy's Burgers",
      cloudinaryImageId: "f1aa621021a2826088089b89842d4e7c",
      locality: "Bhatewara nagar",
      areaName: "Hinjawadi",
      costForTwo: "₹200 for two",
      cuisines: ["Burgers", "American", "Fast Food", "Snacks", "Beverages"],
      avgRating: 4.3,
      parentId: "972",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      accessibility: {
        altText:
          "Wendy's Burgers, serving Burgers, American, Fast Food and more, will be delivered in 30-35 min, costs ₹200 for two, 50% off upto ₹100 for this restaurant",
        altTextCta: "open",
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=575285",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "698337",
      name: "Fried Chicken Destination",
      cloudinaryImageId: "234d20cfc205e8040727e164f0e1780a",
      locality: "Jayram Market",
      areaName: "Hinjewadi",
      costForTwo: "₹200 for two",
      cuisines: ["Burgers", "Snacks", "Rolls & Wraps", "Fast Food"],
      avgRating: 4.2,
      parentId: "245841",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      accessibility: {
        altText:
          "Fried Chicken Destination, serving Burgers, Snacks, Rolls & Wraps and more, will be delivered in 30-35 min, costs ₹200 for two, ₹125 off above ₹249 for this restaurant",
        altTextCta: "open",
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=698337",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "558827",
      name: "HRX by EatFit",
      cloudinaryImageId: "d8d85afa5c5e92461d30ff2ca867a587",
      locality: "Opp Yes bank, Nr. H P Gas",
      areaName: "Hinjawadi",
      costForTwo: "₹450 for two",
      cuisines: ["Healthy Food", "Salads", "Keto", "Pastas"],
      avgRating: 4.5,
      parentId: "335529",
      avgRatingString: "4.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 01:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                  shortDescription: "brand",
                  fontColor: "#7E808C",
                },
              },
            ],
          },
          textBased: {},
        },
      },
      accessibility: {
        altText:
          "HRX by EatFit, serving Healthy Food, Salads, Keto and more, will be delivered in 25-30 min, costs ₹450 for two, items at ₹199 for this restaurant",
        altTextCta: "open",
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=558827",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "323664",
      name: "Indiana Burgers",
      cloudinaryImageId: "m2s6jxl0fjnpqcu0rpwj",
      locality: "Bhujbal Wasti",
      areaName: "Wakad",
      costForTwo: "₹150 for two",
      cuisines: ["Burgers", "American", "Fast Food", "Beverages", "Desserts"],
      avgRating: 3.7,
      parentId: "5714",
      avgRatingString: "3.7",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 05:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                },
              },
            ],
          },
          textBased: {},
          imageBased: {},
        },
      },
      accessibility: {
        altText:
          "Indiana Burgers, serving Burgers, American, Fast Food and more, will be delivered in 30-35 min, costs ₹150 for two, 60% off upto ₹120 for this restaurant",
        altTextCta: "open",
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
  },
  {
    info: {
      id: "441447",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Suratwala",
      areaName: "Hinjewadi",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.1,
      parentId: "166",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 03:40:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                  description: "Delivery!",
                },
              },
            ],
          },
        },
      },
      accessibility: {
        altText:
          "Burger King, serving Burgers, American, will be delivered in 40-45 min, costs ₹350 for two, 50% off upto ₹100 for this restaurant",
        altTextCta: "open",
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "5K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
  },
  {
    info: {
      id: "692493",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/510f05e2-a9e7-49fe-8ab3-ea8c2eb8a5ae_692493.JPG",
      locality: "Phase 2",
      areaName: "Hinjewadi",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.1,
      parentId: "547",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 6.9,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "6.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                  description: "Delivery!",
                },
              },
            ],
          },
          textExtendedBadges: {},
          textBased: {},
        },
      },
      accessibility: {
        altText:
          "KFC, serving Burgers, Biryani, American and more, will be delivered in 45-50 min, costs ₹400 for two, items at ₹189 for this restaurant",
        altTextCta: "open",
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹189",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=692493",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
];

// not uing kys (not accepatable) <<<< index as key <<<<<<< unique is  unique id (best practice)

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-conatiner">
        {restObj.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
