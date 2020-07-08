// Import the js file to test
import { ValidURL } from "../src/client/js/ValidURL"



describe("Testing the ValidURL functionality", () => {
    
  test("Testing the ValidURL function", () => {
    var url = "https://wiki.ubuntu.com/";
             const output=true;
         expect(ValidURL(url)).toEqual(output);
})});



  