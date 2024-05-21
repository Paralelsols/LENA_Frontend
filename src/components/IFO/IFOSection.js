import React,{useState , useEffect }from "react";
import { Box, Button, Grid, Input, Typography, useTheme } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import candy from "../../assets/candy.png";
import eth from "../../assets/eth.png";
import { useAccount, useContractWrite } from "wagmi";
import { useContractRead } from 'wagmi';
import { useToasts } from 'react-toast-notifications'
import Web3 from 'web3'
import abi from '../../abi.json';
import axios from "axios";
import qs from "querystring"
import OAuth from "oauth-1.0a";
import BigNumber from 'bignumber.js';


export const BalanceComponent = ({ address }) => {
  // Setting up the contract read hook
  const { data, isError, isLoading } = useContractRead({
    address: '0x235D370441140ED29597832ac98875fDa7e67d01',
    abi: abi,
    functionName: 'owner',
    // args: [address],  // Passing the address as an argument to the smart contract function
  });

  // Handling loading state
  if (isLoading) {
    return <div>Loading balance...</div>;
  }

  // Handling error state
  if (isError) {
    return <div>Error fetching balance.</div>;
  }
  console.log(data)
  // Display the balance if data is available
  return (
    <div>
      Balance for address {address} is: {data?.toString()}
    </div>
  );
};

const IFOSection = () => {
  const theme = useTheme();
  const { address, isConnected } = useAccount()
  const { addToast } = useToasts()
  const [responseMessage, setResponseMessage] = useState('');


  const infuraUrl = 'https://ropsten.infura.io/v3/8f99e25e35fb47be849213a3438a0c14';
  const infuraMainnet = 'https://mainnet.infura.io/v3/8f99e25e35fb47be849213a3438a0c14'
  const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));
 
  const [depositValue, setdepositValue] = useState(0);
  const [commentValue, setcommentValue] = useState("Write Your Comment..");


// Function to retweet a tweet with a comment
async function retweetWithComment(tweetId, comment, accessToken, accessTokenSecret) {
  try {
      // Twitter API endpoint for retweeting with a comment
      const url = 'https://api.twitter.com/1.1/statuses/update.json';

      // Parameters for quoting the tweet and adding a comment
      const params = {
          status: `${comment} https://twitter.com/user/status/${tweetId}`
      };

      // Authorization header with OAuth 1.0a
      const authHeader = {
          headers: {
              Authorization: generateAuthHeader(url, 'POST', params, accessToken, accessTokenSecret)
          }
      };

      // Make a POST request to retweet with a comment
      const response = await axios.post(url, qs.stringify(params), authHeader);
      console.log('Retweet with comment successful');
      return response.data;
  } catch (error) {
      if (error.response && error.response.data) {
          console.error('Error retweeting with comment:', error.response.data);
      } else {
          console.error('Error retweeting with comment:', error.message);
      }
      throw error;
  }
}

// Create an instance of OAuth
const oauth = OAuth({
  consumer: {
    key: '191505853-AhizvrKSlsRHbBsAibfY5XZEjQdNBPgqm4z4XunP',
    secret: '9ff168wBwzT3IRPSgD30yTgazxyEvcHH7Cr6NFaugIChU'
  },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  }
});

// Function to generate OAuth 1.0a Authorization header
function generateAuthHeader(url, method, params, accessToken, accessTokenSecret) {
    // Generate OAuth 1.0a parameters
    const oauthParams = oauth.authorize({
        url,
        method,
        data: params
    }, {
        key: accessToken,
        secret: accessTokenSecret
    });

    // Construct the OAuth 1.0a Authorization header
    return oauth.toHeader(oauthParams);
}
// Function to generate a random nonce
function generateNonce() {
    return Math.random().toString(36).substring(2);
}

const retweet = async () => {
  // Example usage:
const tweetId = '1716423749929480613';
const comment = commentValue;
const accessToken = '191505853-AhizvrKSlsRHbBsAibfY5XZEjQdNBPgqm4z4XunP';
const accessTokenSecret = '9ff168wBwzT3IRPSgD30yTgazxyEvcHH7Cr6NFaugIChU';

await retweetWithComment(tweetId, comment, accessToken, accessTokenSecret)
    .then((response) => {
        console.log('Retweet with comment successful:', response);
    })
    .catch((error) => {
        console.error('Error retweeting with comment:', error);
    });
}


//////////////////////////////////////////////////////////////////////////////////



  let contractAbi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "referral",
          "type": "address"
        }
      ],
      "name": "buyTokensNative",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "usdtAmount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "referral",
          "type": "address"
        }
      ],
      "name": "buyTokensUSDT",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claimTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "stage",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "newPrice",
          "type": "uint256"
        }
      ],
      "name": "editPriceAtStage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "stage",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "newLimit",
          "type": "uint256"
        }
      ],
      "name": "editTokenLimit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "status",
          "type": "bool"
        }
      ],
      "name": "EndPresale",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "status",
          "type": "bool"
        }
      ],
      "name": "setClaim",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        }
      ],
      "name": "setTokenAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawLeftover",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "balances",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getLatestPrice",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "walletAddress",
          "type": "address"
        }
      ],
      "name": "getPurchaseInfo",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "internalType": "struct presale.Purchase[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isClaimable",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isPresaleOpen",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lastStagetime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "priceperusd",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "purchases",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stage",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokenlimit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "TokenPresale",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenSold",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "USDT",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: '0x235D370441140ED29597832ac98875fDa7e67d01',
    abi: abi,
    onSuccess(data) {
       console.log('Success>>>>>',data)
    },
  })
  
  async function getBalance(address) {
    const contract = new web3.eth.Contract(contractAbi, '0x235D370441140ED29597832ac98875fDa7e67d01');
    try {
      const owner = await contract.methods.owner().call();
      console.log(`The owner of the contract is: ${owner}`);
  } catch (error) {
      console.error('Error fetching owner:', error);
      console.error('Detailed error message:', error.message);
  }
}

const buyTokensNative = async () => {
  try {
    write({
        args: [address],
        functionName: 'buyTokensNative',
        gas: 500000 ,
        // value:web3.utils.toWei(depositValue, 'ether'),
      })
  } catch (error) {
    console.error('Error:', error);
  }
};


useEffect(() => {
  getBalance(address);
}, [address]);


  function getReferralFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const referral = urlParams.get('Referral');
    return referral;
  }
  
  function validateReferral(referral) {
    if (!referral) {
      console.error('Referral value not found in the URL');
      return false;
    }
    
    const addressRegex = /^0x[a-fA-F0-9]{40}$/;
    if (!addressRegex.test(referral)) {
      console.error('Invalid Referral value');
      return false;
    }
  
    return true;
  }

  const shareText = async (text) => {
    try {
      text = 'https://lena-frontend-9a9r.vercel.app/ifo?Referral='+text
      await navigator.share({ text });
    } catch (error) {
      console.error("Error sharing text:", error);
    }
  };

  const ReferralSubmit = async (Referral, Refree ) => {
    try {
      const response = await fetch('https://lena-backend.onrender.com/validateReferral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Referral, Refree }),
      });

      const responseData = await response.json();
      console.log(responseData)
      if(responseData.message){
        addToast(responseData.message, {
          appearance: 'success',
          autoDismiss: true,
        })
      }else{
        addToast(responseData.error, {
          appearance: 'error',
          autoDismiss: true,
        })
      }

    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred. Please try again later.');
    }
  };


  const handleChange = (e) => {
    const { value } = e.target;
    setdepositValue(value)
  };

  const handleChangeComment = (e) => {
    const { value } = e.target;
    setcommentValue(value)
  };

  useEffect(()=>{
  const referral = getReferralFromURL();
  if (validateReferral(referral)) {
    if(isConnected){
      ReferralSubmit(referral , address)
    }
  } else {
    console.log('Referral value is invalid or not found');
  }
  },[address , isConnected])

///////////////////////////////////////////////////////////////////////////////////
  return (
    <Grid container className="h-fit w-full py-10">
      <Grid item xs={12} sm={6} className="pe-2.5 h-full">
        <Box className="w-full h-full border border-[#cdcccc] rounded-2xl p-5">
          <Box className="w-full h-fit py-5 rounded-xl bg-[#0e131c] gap-y-2.5 flex flex-col justify-center items-center">
            <img src={candy} alt="candy" className="h-40 w-fit" />
            <Typography className="uppercase poppins font-semibold text-lg text-[#9b9b9b] text-center">
              Your Allocation
            </Typography>
            <Typography className="uppercase poppins font-semibold text-5xl text-white text-center">
              0 $PLEB
            </Typography>
          </Box>
          <Box className="h-fit w-full block sm:flex items-center justify-between my-5">
            <Box className="flex gap-x-3 items-center">
              <Typography className="text-white poppins uppercase text-lg font-semibold">
                Deposit
              </Typography>
              <Typography className="text-white poppins text-sm">
                Min. deposit is:{" "}
                <Button onClick={()=>getBalance()}>
                <span className="text-[#47a1ff]">0.1 PLEBE</span>

                </Button>
                {/* <BalanceComponent address={address} /> */}
              </Typography>
            </Box>
            <Typography className="text-white poppins uppercase text-lg font-semibold">
              Balance: 0 PLEBE
            </Typography>
          </Box>
          <Box className="rounded-lg border border-[#cdcccc] my-3 bg-[#393a4a] w-full ps-3 flex gap-x-2.5 items-center py-2.5">
            <img src={eth} alt="eth" className="h-6 w-fit" />
            <Typography className="poppins font-semibold text-lg text-white">
              <Input value={depositValue} onChange={handleChange} className="text-white border-0 w-full" type="number" placeholder="0" />
            </Typography>
          </Box>
          <label className="poppins text-white text-sm flex items-center gap-x-2.5 mb-5">
            <input type="checkbox" name="checkbox" value="value" />
            Please confirm you have read and understand PLEBE's ICO rules.
          </label>
          <Box className="button-border-gradient button-shadow w-full p-[2.5px] rounded-lg h-fit cursor-pointer">
            <Box
              className="h-fit py-3 w-full text-center rounded-lg"
              sx={{ backgroundColor: theme.palette.dark }}
            >
             <Button onClick={()=>buyTokensNative()} style={{color:'white'}}> 
              <Typography
                sx={{ color: theme.palette.light }}
                className="text-[10px] font-semibold press-start"
              >
               Deposit 
              </Typography>
              </Button>
            </Box>
          </Box>
          <Box className="h-fit w-full flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row justify-between items-center my-5 px-5">
            <Button target="_blank" href="https://twitter.com/intent/tweet?text=Lena%20is%20the%20best%20coin%20in%20the%20world" className="w-full lg:w-[44%] py-3 rounded-full bg-[#1e242d] text-white poppins capitalize gap-x-2 flex items-center">
              Share on <XIcon className="text-lg" />
            </Button>
            <Box className="button-border-gradient w-full lg:w-[44%] p-[2.5px] rounded-full h-fit cursor-pointer">
              <Box className="h-fit p-2.5 w-full text-center bg-[#141118] rounded-full bg-opacity-95">
                <Typography className="text-white text-sm poppins">
                  Redeem to wallet
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="h-fit w-full flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row justify-between items-center my-5 px-5">
            <Box className="button-border-gradient w-full lg:w-[44%] p-[2.5px] rounded-full h-fit cursor-pointer">
              <Box className="h-fit p-2.5 w-full text-center bg-[#141118] rounded-full bg-opacity-95">
                <Typography className="text-white text-sm poppins">
                <Button target="_blank" href="https://twitter.com/intent/retweet?tweet_id=1716423749929480613" className="text-white normal-case text-sm poppins">
                 Retweet
                </Button>
                </Typography>
              </Box>
            </Box>
            {isConnected ?
            <Box onClick={()=>shareText(address)} className="button-border-gradient w-full lg:w-[44%] p-[2.5px] rounded-full h-fit cursor-pointer">
              <Box className="h-fit p-2.5 w-full text-center bg-[#141118] rounded-full bg-opacity-95">
                <Typography className="text-white text-sm poppins">
                  Referrals
                </Typography>
              </Box>
            </Box>:
              <Box className="button-border-gradient w-full lg:w-[44%] p-[2.5px] rounded-full h-fit cursor-pointer">
              <Box className="h-fit p-2.5 w-full text-center bg-gray-500 rounded-full bg-opacity-95">
                <Typography className="text-white text-sm poppins">
                  Referrals
                </Typography>
              </Box>
            </Box>}
          </Box>
          <Box className="w-full text-center text-white">
            {isConnected ?
            <>
            <h2>Address:</h2>
            <h2>{address}</h2>
            </>:
             <h2>Connect Your Wallet</h2>
            }
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} className="ps-2.5 h-full">
        <Box className="flex flex-col items-center justify-between h-full gap-y-16 w-full sm:ps-8 pe-2.5 pt-6 sm:pt-0">
          <Box className="rounded-lg bg-[#393a4a] flex items-center justify-evenly w-full py-2.5">
            <Box>
              <Typography className="poppins font-semibold text-lg text-white text-center">
                Raised (ETH)
              </Typography>
              <Box className="flex items-center">
                <img src={eth} alt="eth" className="h-5 w-fit" />
                <Typography className="poppins font-semibold text-lg text-white text-center">
                  853.1049
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography className="poppins font-semibold text-lg text-white text-center">
                Total (USD)
              </Typography>
              <Typography className="poppins font-semibold text-lg text-white text-center">
                $ 3,004,888
              </Typography>
            </Box>
          </Box>
          <Box className="rounded-lg bg-[#231c27] border border-[#cdcccc] flex items-center justify-evenly w-full py-4">
            <Typography className="poppins text-sm font-semibold text-[#9d9d9d] text-center">
              PRIVATE PHASE (MAX. 100 ETH)
            </Typography>
            <Typography className="poppins text-sm font-semibold text-[#9d9d9d] text-center">
              0.00020 ETH
            </Typography>
          </Box>
          <Box className="rounded-lg bg-[#231c27] border border-[#cdcccc] flex items-center justify-evenly w-full py-4">
            <Typography className="poppins text-sm font-semibold text-[#9d9d9d] text-center">
              WHITELIST PHASE (MAX. 500 ETH)
            </Typography>
            <Typography className="poppins text-sm font-semibold text-[#9d9d9d] text-center">
              0.00025 ETH
            </Typography>
          </Box>
          <Box className="rounded-lg bg-[#231c27] border border-[#cdcccc] flex items-center justify-evenly w-full py-4">
            <Typography className="poppins text-sm font-semibold text-[#9d9d9d] text-center">
              PUBLIC PHASE (MAX. 600 ETH)
            </Typography>
            <Typography className="poppins text-sm font-semibold text-[#9d9d9d] text-center">
              0.00030 ETH
            </Typography>
          </Box>





          {/* <Box className="rounded-lg border border-[#cdcccc] my-3 bg-[#393a4a] w-full ps-3 flex gap-x-2.5 items-center py-2.5">
           
            <Typography className="poppins font-semibold text-lg w-full text-white">
              <Input value={commentValue} onChange={handleChangeComment} className="text-white border-0 w-full" type="text" placeholder="Retweet Comment" />
            </Typography>
          </Box>
   
          <Box className="button-border-gradient button-shadow w-full p-[2.5px] rounded-lg h-fit cursor-pointer mt-[-60px]">
            <Box
              className="h-fit py-3 w-full text-center rounded-lg"
              sx={{ backgroundColor: theme.palette.dark }}
            >
             <Button onClick={()=>retweet()} style={{color:'white'}}> 
              <Typography
                sx={{ color: theme.palette.light }}
                className="text-[10px] font-semibold press-start"
              >
               Retweet 
              </Typography>
              </Button>

            </Box>
          </Box> */}
              {/* <a href="https://twitter.com/intent/retweet?tweet_id=1716423749929480613">
          Retweet
          </a>
          <a href="https://twitter.com/intent/tweet?text=Hello%20world">
          tweet With Comment
          </a>
          <a href="https://twitter.com/intent/like?tweet_id=1716423749929480613">
          Like
          </a> */}


        </Box>
      </Grid>
    </Grid>
  );
};

export default IFOSection;
