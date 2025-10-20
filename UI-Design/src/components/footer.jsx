

const footer = () => {
  return (
    <>
   <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">

        <div>
          <h3 className="text-lg font-semibold mb-4">Exclusive</h3>
          <p className="mb-2 font-semibold">Subscribe</p>
          <p className="text-gray-400 mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-gray-600 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-white px-3 py-2 flex-1 outline-none"
            />
            <button className="bg-white text-black px-3 py-2 hover:bg-gray-200 transition">
              ➤
            </button>
          </div>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <p className="text-gray-400 mb-2">  Punjab, PK,</p>
          <p className="text-gray-400 mb-2">DH 1515, Lahore</p>
          <p className="text-gray-400 mb-2">exclusive@gmail.com</p>
          <p className="text-gray-400">+928015-88888</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">My Account</a></li>
            <li><a href="#">Login / Register</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Download App</h3>
          <p className="text-gray-400 text-xs mb-3">Save $3 with App New User Only</p>
          
          
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="https://tse1.explicit.bing.net/th/id/OIP.Fy_h50i9aKcNol3vuKDuJgHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="QR code"
              className="w-16 h-16 object-cover"
            />
            <div className="flex flex-col space-y-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-28"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-28"
              />
            </div>
          </div>

          
          <div className="flex space-x-4 mt-2 text-gray-400">
            <a href="#"><i className="fab fa-twitter text-xl hover:text-white"></i></a>
            <a href="#"><i className="fab fa-facebook text-xl hover:text-white"></i></a>
            <a href="#"><i className="fab fa-instagram text-xl hover:text-white"></i></a>
            <a href="#"><i className="fab fa-linkedin text-xl hover:text-white"></i></a>
          </div>
        </div>

      </div>
    </footer>
</>
  )
}

export default footer