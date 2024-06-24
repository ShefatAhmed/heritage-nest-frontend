const Footer = () => {
  return (
    <div className="bg-[#ECF5FF]">
      <div className="grid md:grid-cols-12 gap-12 py-12 px-12">
        <div className="col-span-2">
          <img
            className="w-[53.29px] h-[80px]"
            src="https://i.postimg.cc/SR4nWfkw/e8cbbb0006f4af5b4764c7061ba11f37.png"
            alt=""
          />
          <p className="mt-5 text-[#667085] font-semibold">
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </div>
        <div className="col-span-2 py-2">
          <ul className="flex flex-col gap-3 font-semibold">
            <li className="text-[#667085]">Product</li>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>
        <div className="col-span-2 py-2">
          <ul className="flex flex-col gap-3 font-semibold">
            <li className="text-[#667085]">Company</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col-span-2 py-2">
          <ul className="flex flex-col gap-3 font-semibold">
            <li className="text-[#667085]">Resources</li>
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="col-span-2 py-2">
          <ul className="flex flex-col gap-3 font-semibold">
            <li className="text-[#667085]">Social</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribbble</li>
          </ul>
        </div>
        <div className="col-span-2 py-2">
          <ul className="flex flex-col gap-3 font-semibold">
            <li className="text-[#667085]">Legal</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <hr className="mx-12" style={{ borderColor: "#C5E2FF" }} />
      <div className="md:flex justify-between py-5 px-12">
        <div>
          <h1 className="text-[#667085] font-semibold">
            © 2024 Heritage- Nest . All rights reserved.
          </h1>
        </div>
        <div>
          <ul className="flex gap-8 mt-6 md:mt-0 text-xl text-blue-900">
            <li>
              <i className="fa-brands fa-twitter"></i>
            </li>
            <li>
              <i className="fa-brands fa-linkedin"></i>
            </li>
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-regular fa-hand-peace"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
