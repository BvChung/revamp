import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1E1F22F2] shadow-md z-50">
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <svg
            width="22"
            height="25"
            viewBox="0 0 22 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.85515 1.03857H3.93258L7.71646 4.67407H8.08743V4.45149H13.5778V4.67407H13.8745L17.7326 1.03857H19.7359L20.6262 2.22568V5.5644L19.2165 8.53215V10.9064L18.6229 12.0935V14.8386L15.8036 18.9193V20.329L13.3552 22.258L12.5391 23.4451H9.12614L8.31001 22.258L5.86161 20.329V18.9193L3.04225 14.8386V12.0935L2.4487 10.9064V8.53215L1.03902 5.5644V2.22568L1.85515 1.03857ZM13.2068 15.1354V11.8709L15.21 10.5354L16.5455 11.5741V12.7612L13.2068 15.1354ZM6.45516 10.5354L5.11968 11.5741V12.7612L8.4584 15.1354V11.8709L6.45516 10.5354ZM10.4616 20.4032L8.97775 19.1419H12.6874L11.2036 20.4032V21.3677H10.4616V20.4032Z"
              fill="#C80F2E"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.33549 0L4.37743 0L7.93874 3.41291H13.7259L17.2872 0L20.3291 0L21.6646 1.85484V5.71292L20.2549 8.75487V11.1291L19.6614 12.3162V15.1355L16.842 19.2162V20.8485L14.0968 23.0001L13.1323 24.484H8.53229L7.56777 23.0001L4.8226 20.8485V19.2162L2.00323 15.1355V12.3162L1.40968 11.1291V8.75487L0 5.71292L0 1.85484L1.33549 0ZM1.85484 1.03871L1.03871 2.22581V5.56453L2.4484 8.53229V10.9065L3.04195 12.0936V14.8388L5.86131 18.9194V20.3291L8.3097 22.2581L9.12584 23.4452H12.5388L13.3549 22.2581L15.8033 20.3291V18.9194L18.6226 14.8388V12.0936L19.2162 10.9065V8.53229L20.6259 5.56453V2.22581L19.7355 1.03871H17.7323L13.8742 4.67421H13.5775V4.45163H8.08712V4.67421H7.71615L3.93227 1.03871H1.85484Z"
              fill="#F2F2F2"
            />
            <path
              d="M8.45884 11.8711L6.45561 10.5356L5.12012 11.5744V12.7615L8.45884 15.1357V11.8711Z"
              fill="white"
            />
            <path
              d="M16.5456 12.7615L13.2068 15.1357V11.8711L15.2101 10.5356L16.5456 11.5744V12.7615Z"
              fill="white"
            />
            <path
              d="M12.6874 19.1416H8.97774L10.4616 20.4029V21.3674H11.2036V20.4029L12.6874 19.1416Z"
              fill="white"
            />
          </svg>
          {/* <h1 className="text-white text-lg font-bold">CougarCS</h1> */}
          <svg
            width="110"
            height="14"
            viewBox="0 0 110 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.03365 3.54148C3.03365 3.39111 3.14237 3.296 3.26071 3.296H11.1159V0.491455H2.85568C1.32383 0.491455 0.0818176 1.73347 0.0818176 3.26532V11.2187C0.0818176 12.7505 1.32383 13.9926 2.85568 13.9926H11.1159V11.188H3.26071C3.14237 11.188 3.03365 11.0929 3.03365 10.9425V3.54148Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.3865 3.26532C25.3865 1.73347 24.1445 0.491455 22.6127 0.491455H14.9355C13.4036 0.491455 12.1616 1.73347 12.1616 3.26532V11.2187C12.1616 12.7505 13.4036 13.9926 14.9355 13.9926H22.6127C24.1445 13.9926 25.3865 12.7505 25.3865 11.2187V3.26532ZM22.76 3.54148V10.9425C22.76 11.2555 22.5022 11.4949 22.2077 11.4949H15.3405C15.0459 11.4949 14.8066 11.2555 14.8066 10.9425V3.54148C14.8066 3.2285 15.0459 2.98916 15.3405 2.98916H22.2077C22.5022 2.98916 22.76 3.2285 22.76 3.54148Z"
              fill="white"
            />
            <path
              d="M37.5704 13.9926C39.1023 13.9926 40.3443 12.7505 40.3443 11.2187V0.491455H37.4109V10.9425C37.4109 11.0794 37.2972 11.188 37.1654 11.188H30.2982C30.1799 11.188 30.0712 11.0929 30.0712 10.9425V0.491455H27.1193V11.2187C27.1193 12.7505 28.3614 13.9926 29.8932 13.9926H37.5704Z"
              fill="white"
            />
            <path
              d="M52.5256 13.9926C54.0574 13.9926 55.2994 12.7505 55.2994 11.2187V5.83052H47.9659V8.65348H52.366V10.9425C52.366 11.0794 52.2523 11.188 52.1205 11.188H45.2534C45.1351 11.188 45.0263 11.0929 45.0263 10.9425V3.54148C45.0263 3.39112 45.1351 3.296 45.2534 3.296H54.7471V0.491455H44.8484C43.3165 0.491455 42.0745 1.73347 42.0745 3.26532V11.2187C42.0745 12.7505 43.3165 13.9926 44.8484 13.9926H52.5256Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M60.0103 10.8443H66.3876L67.8052 13.9926H70.796L64.7784 0.491455H61.6371L55.6002 13.9926H58.611L60.0103 10.8443ZM65.6102 8.34664L63.1984 2.95234L60.7866 8.34664H65.6102Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M81.6774 9.40832H81.8477C83.3811 9.40832 84.6216 8.16481 84.6216 6.61604V3.26532C84.6216 1.73347 83.3796 0.491455 81.8477 0.491455H71.3967V13.9926H74.3485V9.40832H78.133L81.9808 13.9926H85.5252L81.6774 9.40832ZM81.995 6.35829C81.995 6.65286 81.7373 6.8922 81.4427 6.8922H74.3485V2.98916H81.4427C81.7373 2.98916 81.995 3.2285 81.995 3.54148V6.35829Z"
              fill="white"
            />
            <path
              d="M89.2304 3.54148C89.2304 3.39112 89.3392 3.296 89.4575 3.296H97.3127V0.491455H89.0525C87.5206 0.491455 86.2786 1.73347 86.2786 3.26532V11.2187C86.2786 12.7505 87.5206 13.9926 89.0525 13.9926H97.3127V11.188H89.4575C89.3392 11.188 89.2304 11.0929 89.2304 10.9425V3.54148Z"
              fill="white"
            />
            <path
              d="M107.048 10.9425C107.048 11.086 106.946 11.188 106.803 11.188H98.2663V13.9926H107.226C108.758 13.9926 110 12.7505 110 11.2187V8.60439C110 7.07254 108.758 5.83052 107.226 5.83052H101.316C101.191 5.83052 101.089 5.72856 101.089 5.60346V3.54148C101.089 3.39112 101.198 3.296 101.316 3.296H109.724V0.491455H100.911C99.3795 0.491455 98.1375 1.73347 98.1375 3.26532V5.87962C98.1375 7.41147 99.3795 8.65348 100.911 8.65348H106.803C106.953 8.65348 107.048 8.76222 107.048 8.88055V10.9425Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
