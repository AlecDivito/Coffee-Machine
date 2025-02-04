# Coffee Machine In Code!

Project made for software design that models a coffee machine!

### Run the project!

```
npm install

npm run watch

# go to localhost:3000

```

### Problem Modeled
Below are the software requirements for the Coffee Maker Simulator as defined in Chapter 20:
“The Mark IV Special makes up to 12 cups of coffee at a time. The user places a filter in the filter holder, 
fills the filter with coffee grounds, and slides the filter holder into its receptacle. The user then pours up 
to 12 cups of water into the water strainer and presses the Brew button. The water is heated until 
boiling. The pressure of the evolving steam forces the water to be sprayed over the coffee grounds, and 
coffee drips through the filter into the pot. The pot is kept warm for extended periods by a warmer 
plate, which turns on only if coffee is in the pot. If the pot is removed from the warmer plate while 
water is being sprayed over the grounds, the flow of water is stopped so that brewed coffee does not 
spill on the warmer plate. The following hardware needs to be monitored or controlled:

- The heating element for the boiler. It can be turned on or off.
- The heating element for the warmer plate. It can be turned on or off.
- The sensor for the warmer plate. It has three states: warmerEmpty, potEmpty, potNotEmpty.
- A sensor for the boiler, which determines whether water is present. It has two states: boilerEmpty or boilerNotEmpty.
- The Brew button. This momentary button starts the brewing cycle. It has an indicator that lights  up when the brewing cycle is over and the coffee is ready.
- A pressure-relief valve that opens to reduce the pressure in the boiler. The drop in pressure 

stops the flow of water to the filter. The value can be opened or closed.
The hardware for the Mark IV has been designed and is currently under development. The hardware 
engineers have even provided a low-level API for us to use, so we don’t have to write any bit-twiddling I/
O driver code. The code for these interface functions is shown in Listing 20-1. If this code looks strange 
to you, keep in mind that it was written by hardware engineers