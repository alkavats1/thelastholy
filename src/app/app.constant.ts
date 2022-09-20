import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';


@Injectable()
export class AppConstants {
  public static readonly abc = 'Movies Anywhere makes the movie watching experience easier and better by offering one home for your favorite purchased movies* from iTunes, Amazon Prime Video, Vudu, Google Play/YouTube, Microsoft, Xfinity, FandangoNOW, Verizon Fios TV and DIRECTV.  Simply access Movies Anywhere on your computer (PC or Mac) through MoviesAnywhere.com. You can also download the free app on compatible mobile devices from the Apple App Store, Google Play Store, Amazon Appstore,, Roku Channel Store, LG TV App Store and VIZIO Smart TV <a href="/home">Appstore</a>.'


  public static readonly emailPattern = '(?:[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+)*)@(?:(?:[a' +
    '-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+(?:[a-zA-Z0-9-]*[a-zA-Z]){2,})';
  public static readonly passwordPattern = '(^(?=.*?[a-z])(?=.*[A-Z])(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{8,15}$)';
  public static readonly usernamePattern = '(^[a-zA-Z0-9_]{1,254}$)';
  public static readonly validateCodePattern = '(^[a-zA-Z0-9]{1,254}$)';
  public static readonly namePattern = '(^[a-zA-Z\-]+$)';
  public static readonly postalCodePattern = '^\\d{5}(?:[-\\s]\\d{4})?$';
  public static readonly defaultImage = 'https://platform3-portalv3-production.s3-us-west-2.amazonaws.com/uniallaccess/assets/common/image.png';
  public static readonly starImage = 'https://platform3-portalv3-production.s3-us-west-2.amazonaws.com/uniallaccess/assets/rewards/vip-modal.svg';
  public static readonly base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  public static readonly domainsValue = ['maildrop.cc', 'yopmail.com', '10minutemail.net', '10minemail.com', 'EmailOnDeck.com', 'e4ward.com', 'emailondeck.com'];
  public static readonly requestOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };
  public static readonly requestOptionsForXML = {
    headers: new HttpHeaders({
      'Accept': 'text/xml',
      'Content-Type': 'text/xml'
    }),
  };
  public static readonly requestOptionsWithCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true,
  };

  public static readonly requestOptionsWithResponse = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    observe: 'response' as 'response'
  };
  public static readonly requestOptionsFileDownload = {
    headers: new HttpHeaders({
      'Content-Type': 'application/pdf',
      'Accept': 'application/pdf'
    }),
    observe: 'response' as 'response',
    responseType: 'blob',
  };

  public static readonly recaptchaSiteKey = '6LdDHxMUAAAAAFAhv8pKHyGhZftNhhJagKjRchfj';
  public static readonly errorPopTitle = 'Snap! Please try again.';
  public static readonly successPopTitle = 'Great! Operation successfully completed.';
  public static readonly inValidDataMessage = 'Please enter valid values';
  public static readonly registerMessage = 'Welcome!';
  public static readonly registerMessageTitle = 'Congrats! Registration complete.';
  public static readonly ngCircleProgressOption = {
    radius: 100,
    outerStrokeWidth: 16,
    innerStrokeWidth: 8,
    outerStrokeColor: '#78C000',
    innerStrokeColor: '#C7E596',
    animationDuration: 300,
  };
  public static readonly receiptUploadRequestOptions = {
    withCredentials: true
  };



  public static readonly usa = 'US';
  public static readonly addressComponents = 'address_components';
  public static readonly formattedAddress = 'formatted_address';
  public static readonly googlePlaceJSONNameField = 'name';
  public static readonly notificationDmPattern = [
    /added (.*)(?=!)/,
    /.*(?= has arrived! Get [0-9]* points and redeem for a digital movie reward.)/g,
    /.*(?= is here! Get it now.)/g,
    /.*(?= is here! Get yours, earn [0-9]* points and redeem for a digital movie.)/g,
    /.*(?= just dropped! Buy it and get [0-9]* points!)/g
  ];

  /**
   * Checkout Component
   */
  public static readonly successTransactionYellowText = 'Thank you for your payment!';
  public static readonly successTransactionWhiteText = 'You will receive a confirmation email.';
  public static readonly failureTransactionYellowText = 'We\'re sorry!';
  public static readonly failureTransactionWhiteText = 'Your payment could not be processed!';
  public static readonly countDownTimerUpYellowText = 'Sorry! You did not redeem within 20 minutes.';
  public static readonly countDownTimerUpWhiteText = 'Please visit our rewards page to check out other great rewards!';

  /**
   * When user clicks on email(eblasts) links, and gets to login page with
   * a query params value in returnUrl
   */
  public static readonly loginRedirectionEmailGetMyPointsButton = 'utm_content=GetMyPoints';
  public static readonly loginRedirectionSource = 'utm_source=Email';
  public static readonly EmailLinkGetMyPointsButtonUrlContent = 'GetMyPoints';
  public static readonly EmailLinksUrlSource = 'Email';
  /**
   * Game workflow | Query param src having game source should match a specific URL
   */
  public static readonly pathToS3GameUrlsJsonFile = 'https://3tl-json-data.s3.us-west-2.amazonaws.com/' +
    'portals/universal-portal/redirect-urls.json';
  public static readonly localStorageKeyForGameJwtToken = 'jwtTokenForGameRedirect';
 /* public static readonly rewardPageSlider : PageSingleSlide[] = [
    {
      desktop: "https://platform3-portalv3-production.s3.us-west-2.amazonaws.com/uniallaccess/bannerimages/minions-the_rise_of_gru_earn_points_banner_1920x600.jpg",
      mobile: "https://platform3-portalv3-production.s3.us-west-2.amazonaws.com/uniallaccess/bannerimages/minions-the_rise_of_gru_earn_points_banner_1000x1000.jpg",
      link: "/rewards"
    },
    {
      desktop: "https://platform3-portalv3-production.s3.us-west-2.amazonaws.com/uniallaccess/bannerimages/mrs_harris_goes_to_paris_earn_points_banner_1920x600.jpg",
      mobile: "https://platform3-portalv3-production.s3.us-west-2.amazonaws.com/uniallaccess/bannerimages/mrs_harris_goes_to_paris_earn_points_banner_1000x1000.jpg",
      link: "/rewards"
    },
    {
      desktop: "https://platform3-portalv3-production.s3.us-west-2.amazonaws.com/uniallaccess/bannerimages/black-phone_earn_points_banner_1920x600_v1a.jpg",
      mobile: "https://platform3-portalv3-production.s3.us-west-2.amazonaws.com/uniallaccess/bannerimages/black-phone_earn_points_banner_1000x1000.jpg",
      link: "/rewards"
    },
  ];
  public static readonly homePageSliderLoggedIn : PageSingleSlide[] = [
    {
      desktop: "https://platform3-portalv3-production.s3.us-west-2.amazonaws.com/uniallaccess/bannerimages/minions-the_rise_of_gru_earn_points_banner_1920x600.jpg",
      mobile: "https://platform3-portalv3-production.s3.us-west-2.amazonaws.com/uniallaccess/bannerimages/minions-the_rise_of_gru_earn_points_banner_1000x1000.jpg",
      link: "/home"
    },
    {
      desktop: "https://platform3-portalv3-production.s3.us-west-2.amazonaws.com/uniallaccess/bannerimages/mrs_harris_goes_to_paris_earn_points_banner_1920x600.jpg",
      mobile: "https://platform3-portalv3-production.s3.us-west-2.amazonaws.com/uniallaccess/bannerimages/mrs_harris_goes_to_paris_earn_points_banner_1000x1000.jpg",
      link: "/home"
    },
    {
      desktop: "https://platform3-portalv3-production.s3.us-west-2.amazonaws.com/uniallaccess/bannerimages/nope_earn_points_banner_1920x600.jpg",
      mobile: "https://platform3-portalv3-production.s3.us-west-2.amazonaws.com/uniallaccess/bannerimages/nope_earn_points_banner_1000x1000.jpg",
      link: "/home"
    },
    {
      desktop: "https://platform3-portalv3-production.s3.us-west-2.amazonaws.com/uniallaccess/bannerimages/bad-guys_earn_points_banner_1920x600.jpg",
      mobile: "https://platform3-portalv3-production.s3.us-west-2.amazonaws.com/uniallaccess/bannerimages/bad-guys_earn_points_banner_1000x1000.jpg",
      link: "/home"
    }
  ];

  public static readonly homePageSliderNonLoggedIn : PageSingleSlide[] = [
    {
      desktop: "https://i.postimg.cc/tgvdt8Px/main-banner.webp",
      mobile: "https://i.postimg.cc/tgvdt8Px/main-banner.webp",
      link: "/home"
    },
  ];*/
}
