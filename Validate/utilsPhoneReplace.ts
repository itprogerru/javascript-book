/*
* example +7 (923) 333 333 33 to 92333333333
*  */

export const utilsPhoneReplace = (phoneMask: string) => {
    return phoneMask.replace(/\+7|\D+/g, '');
}
