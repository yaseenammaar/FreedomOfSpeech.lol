import Header from "./header"; 
import Footer from "./footer"; 
import { useEffect,  useState } from "react";
import { getOwnBalance } from './Web3Client';

export default function App() {
	const [balance, setBalance] = useState(0);

	const fetchBalance = () => {
		getOwnBalance()
			.then((balance) => {
				setBalance(balance);
        console.log("Balance", balance);
			})
			.catch((err) => {
				console.log(err);
			});
	};

  return (
    <>
    <Header/>

    <p>Your balance is {balance}</p>
			<button onClick={() => fetchBalance()}>Refresh balance</button>
  
<br/>
      <section className="text-center px-3 sm:px-12 md:px-28">
              <div className="rounded-xl shadow-xl shadow-gray-300 overflow-hidden">
                <img class="w-full" src="https://scalebranding.com/wp-content/uploads/2021/06/Black-Flying-Bird-Logo.jpg" />
              </div>
            </section>
            <center> <br/><br/>
            <div class="bg-blue-100 border-blue-500 text-blue-600 p-1" role="alert">
      <center><p>Next price: 0.002 ETH</p></center>
    </div>
   
        <div class="flex box-border h-16 w-80 p-4">
         <label class="relative block">
            
            <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter URL" type="text" name="search"/>
          </label>
          <div class="mx-3"> 
          <button class="bg-blue-300 hover:bg-blue-400 text-white py-2 px-3 rounded-xl">
              Change
            </button>
            </div>
        </div>
        </center>
    <Footer/>
   
    </>
  )
}