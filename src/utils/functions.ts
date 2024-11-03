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