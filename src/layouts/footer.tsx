import react from "../assets/techs/react.svg";
import tailwind from "../assets/techs/tailwind.svg";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";

function Footer() {
    return(
       
        <footer className="bg-lighttext2 text-white py-8 w-[100%] border-t-8 border-mauve">
            <div className="px-8 font-semibold justify-center items-center container">
          <p className="text-lg py-2 ">
            Where to Find Me:
          </p>
          <p className="text-sm pb-2">
            <img src={phone} alt="phone" className="w-4 h-4 inline-block absolute mr-2" />
            <div className="inline-block ml-6">
            Mobile: <a href="tel:+213540887651" className="text-mauve">+(213) 540-887-651</a></div>
          </p>
          <p className="text-sm ">
            <img src={location} alt="location" className="w-4 h-4 inline-block absolute mr-2" />
            <div className="inline-block ml-6">
            Address: Oran , Algeria</div>
          </p>
        </div>
        <div className="container mx-auto flex justify-center items-center">
          <p className="text-sm">
            © 2023 Mohamed Amine Benchaa. All rights reserved. | Built with{' '}
            <span className="text-mauve">
            <img src={react} alt="react" className="w-10 h-10 inline-block mr-2" />
                </span> and{' '}
            <span className="text-mauve">
            <img src={tailwind} alt="tailwind" className="w-10 h-10 inline-block mr-2" />
            </span>
          </p>
        </div>
      </footer>
    )
}

export default Footer;