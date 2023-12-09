// // export default function ProjectsLayout({
// //     children,
// // }: { children: React.ReactNode }) {
// //     return (
// //         <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
// //             {children}
// //         </div>
// //     );
// // }

// import type { AppProps } from "next/app";
// import { ThirdwebProvider } from "@thirdweb-dev/react";
// import "../styles/globals.css";

// // This is the chain your dApp will work on.
// // Change this to the chain your app is built for.
// // You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// const activeChain = "ethereum";

// function ProjectsLayout({
//     children,
// }: { children: React.ReactNode }) {
//     return (
//         <ThirdwebProvider
//             clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
//             activeChain={activeChain}
//         >
//             {children}
//         </ThirdwebProvider>
//     );
// }

// export default ProjectsLayout;
