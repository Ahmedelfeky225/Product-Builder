/**
  * Slices a string to a specified maximum length and adds ellipsis if it exceeds the limit.
* @param {string} txt - The text to be sliced.
 * @param {number} [max=50] - The maximum allowed length for the text. Defaults to 50 if not specified.
 * @returns {string} - The sliced text with ellipsis if it exceeds the maximum length, or the original text if within the limit.
 */

export function txtSlicer(txt:string,max:number=50){
if(txt.length >=max){
    return txt.slice(0,max) + '...';
}
return txt
}


/**
 * Formats a numeric string by adding commas as thousands separators.
 *
 * @param {string} x - The numeric string to format.
 * @returns {string} The formatted string with commas as thousands separators.
 *
 * @example
 * // Basic usage
 * const formattedNumber = numberWithCommas("1234567");
 * console.log(formattedNumber); // Output: "1,234,567"
 *
 * @example
 * // Handling small numbers
 * const formattedNumber = numberWithCommas("999");
 * console.log(formattedNumber); // Output: "999"
 *
 * @example
 * // Handling empty string
 * const formattedNumber = numberWithCommas("");
 * console.log(formattedNumber); // Output: ""
 *
 * @example
 * // Pre-formatted string
 * const formattedNumber = numberWithCommas("1,234,567");
 * console.log(formattedNumber); // Output: "1,234,567"
 */
export function numberWithCommas(x: string): string {
  return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
