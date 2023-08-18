    // JavaScript code to fetch and update cryptocurrency data using CoinGecko API

    // Define the cryptocurrency symbols
    const symbols = ["bitcoin", "tron", "binancecoin", "dogecoin", "litecoin", "alternative-coin"];

    // Fetch cryptocurrency prices
    async function fetchPrices() {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${symbols.join(",")}&vs_currencies=usd`);
        const data = await response.json();

        // Update the DOM with the fetched prices
        document.getElementById("bitcoinPrice").textContent = "$" + data.bitcoin.usd;
        document.getElementById("tronPrice").textContent = "$" + data.tron.usd;
        document.getElementById("binancePrice").textContent = "$" + data.binancecoin.usd;
        document.getElementById("dogePrice").textContent = "$" + data.dogecoin.usd;
        document.getElementById("litecoinPrice").textContent = "$" + data.litecoin.usd;
        document.getElementById("altcoinPrice").textContent = data["alternative-coin"].usd;
      } catch (error) {
        console.error("Error fetching cryptocurrency prices:", error);
      }
    }

    // Call the fetchPrices function to retrieve and update the prices
    fetchPrices();

    // Function to navigate back to the home page and show loading overlay
    function showLoading() {
      document.querySelector(".loading-overlay").style.display = "flex";
      setTimeout(() => {
        window.location.href = "Home.html";
      }, 5000); // Wait for 5 seconds before redirecting
    }
    
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/645e070e74285f0ec46b0ef0/1h07kn5mb';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })()
