// // // import * as React from "react";
// // // import ReactPhoneInput from "react-phone-input-2";
// // // interface FLPhoneNumberInputProps {
// // //     onChange?: (e: string) => void;
// // //     value?: string | null;
// // //     defaultErrorMessage?: string;
// // // }
// // // export default function PhoneNumber({
// // //     onChange,
// // //     value,
// // //     defaultErrorMessage,
// // // }: FLPhoneNumberInputProps) {
// // //     return (
// // //         <ReactPhoneInput
// // //             specialLabel=""
// // //             data-testid="phone-input"
// // //             // country="us"
// // //             placeholder="أدخل رقم الجوال"
// // //             inputClass="TextField"
// // //             inputStyle={{
// // //                 width: "100%",
// // //                 height: 50,
// // //                 backgroundColor: "white",
// // //                 outline: "none",
// // //                 border: "1px solid #272B3A",
// // //                 borderRadius: "10px",
// // //                 padding: "0 10px",
// // //                 fontSize: "1rem",
// // //             }}
// // //             // searchPlaceholder="asdk"
// // //             defaultErrorMessage={defaultErrorMessage}
// // //             value={value}
// // //             inputProps={{ required: true }}
// // //             onChange={onChange}
// // //         />
// // //     );
// // // }import * as React from "react";
// // import ReactPhoneInput from "react-phone-input-2";

// // interface FLPhoneNumberInputProps {
// //     onChange?: (e: string) => void;
// //     value?: string | null;
// //     defaultErrorMessage?: string;
// // }

// // export default function PhoneNumber({
// //     onChange,
// //     value,
// //     defaultErrorMessage,
// // }: FLPhoneNumberInputProps) {
// //     return (
// //         <ReactPhoneInput
// //             specialLabel=""
// //             data-testid="phone-input"
// //             placeholder="أدخل رقم الجوال"
// //             inputClass="TextField"
// //             inputStyle={{
// //                 width: "100%",
// //                 height: "60px",
// //                 backgroundColor: "white",
// //                 outline: "none",
// //                 border: "1px solid lightGray", // Light gray border by default
// //                 borderRadius: "6px",
// //                 padding: "0 15px", // Adjust padding here
// //                 fontSize: "1rem",
// //                 transition: "border-color 0.3s ease", // Smooth transition on focus
// //             }}
// //             defaultErrorMessage={defaultErrorMessage}
// //             value={value}
// //             inputProps={{ required: true }}
// //             onChange={onChange}
// //         />
// //     );
// // }



// // import ReactPhoneInput from "react-phone-input-2";

// // interface FLPhoneNumberInputProps {
// //     onChange?: (e: string) => void;
// //     value?: string | null;
// //     defaultErrorMessage?: string;
// //     lang?: string;  // Add language prop
// // }

// // export default function PhoneNumber({
// //     onChange,
// //     value,
// //     defaultErrorMessage,
// //     lang = "ar", // Default to Arabic
// // }: FLPhoneNumberInputProps) {
// //     return (
// //         <div style={{ direction: lang === "ar" ? "rtl" : "ltr" }}>
// //             <ReactPhoneInput
// //                 specialLabel=""
// //                 data-testid="phone-input"
// //                 placeholder="أدخل رقم الجوال"
// //                 inputClass="TextField phone-input-focused" // Add custom class for focus
// //                 inputStyle={{
// //                     width: "100%",
// //                     height: "65px",
// //                     backgroundColor: "white",
// //                     outline: "none",
// //                     border: "1px solid lightGray", // Light gray border by default
// //                     borderRadius: "6px",
// //                     padding: "0 15px", // Adjust padding here
// //                     fontSize: "1rem",
// //                 }}
// //                 defaultErrorMessage={defaultErrorMessage}
// //                 value={value}
// //                 inputProps={{ required: true }}
// //                 onChange={onChange}
// //             />
// //         </div>
// //     );
// // }
// import React from "react";
// import ReactPhoneInput from "react-phone-input-2";

// interface FLPhoneNumberInputProps {
//     onChange?: (e: string) => void;
//     value?: string | null;
//     defaultErrorMessage?: string;
//     lang?: string; // Add language prop
// }

// export default function PhoneNumber({
//     onChange,
//     value,
//     defaultErrorMessage,
//     lang = "ar", // Default to Arabic
// }: FLPhoneNumberInputProps) {
//     // const handleInputChange = (value: string) => {
//     //     if (onChange) {
//     //         onChange(value);
//     //     }
//     //     // Validate the phone number
//     //     const isValid = value && value.length >= 10; // Adjust validation logic as needed
//     //     setError(isValid ? null : defaultErrorMessage || "Invalid phone number");
//     // };

//     return (
//         <div style={{ direction: lang === "ar" ? "rtl" : "ltr" }}>
//             <ReactPhoneInput
//                 specialLabel=""
//                 data-testid="phone-input"
//                 placeholder={lang === "ar" ? "أدخل رقم الجوال" : "Enter phone number"}
//                 inputClass="TextField phone-input-focused"
//                 inputStyle={{
//                     width: "100%",
//                     height: "65px",
//                     backgroundColor: "white",
//                     outline: "none",
//                     border: `1px solid ${defaultErrorMessage?.length ? "red" : "lightGray"}`, // Red border on error
//                     borderRadius: "6px",
//                     padding: "0 15px",
//                     fontSize: "1rem",
//                 }}
//                 value={value}
//                 inputProps={{ required: true }}
//                 onChange={onChange}
//             />
//             {defaultErrorMessage && (
//                 <span
//                     style={{
//                         color: "red",
//                         fontSize: "0.9rem",
//                         marginTop: "5px",
//                         display: "block",
//                     }}
//                 >
//                     {defaultErrorMessage}
//                 </span>
//             )}
//         </div>
//     );
// }
import React from "react";
import ReactPhoneInput from "react-phone-input-2";

interface FLPhoneNumberInputProps {
    onChange?: (e: string) => void;
    value?: string | null;
    defaultErrorMessage?: string;
    lang?: string; // Add language prop
}

export default function PhoneNumber({
    onChange,
    value,
    defaultErrorMessage,
    lang = "ar", // Default to Arabic (RTL)
}: FLPhoneNumberInputProps) {
    return (
        <div style={{ direction: lang === "ar" ? "rtl" : "ltr" }}>
            <ReactPhoneInput
                specialLabel=""
                data-testid="phone-input"
                placeholder={lang === "ar" ? "أدخل رقم الجوال" : "Enter phone number"}
                inputClass="TextField phone-input-focused"
                inputStyle={{
                    width: "100%",
                    height: "39px",
                    backgroundColor: "white",
                    outline: "none",
                    border: `1px solid ${defaultErrorMessage?.length ? "red" : "lightGray"}`, // Red border on error
                    borderRadius: "6px",
                    padding: "0 15px",
                    fontSize: "1rem",
                    textAlign: lang === "ar" ? "right" : "left", // Adjust text alignment based on language
                    fontFamily:"Arabic"
                }}
                value={value}
                inputProps={{ required: true }}
                onChange={onChange}
            />
            {defaultErrorMessage && (
                <span
                    style={{
                        color: "red",
                        fontSize: "0.9rem",
                        marginTop: "5px",
                        display: "block",
                    }}
                >
                    {defaultErrorMessage}
                </span>
            )}
        </div>
    );
}
