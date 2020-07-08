// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker"




describe("Testing the checkForName functionality", () => {
    
    test("Testing the checkForName function", () => {
       const input="Picard";
       const output=true;    
           expect(checkForName(input)).toBe(output);
})});
