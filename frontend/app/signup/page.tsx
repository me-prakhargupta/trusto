import Link from "next/link";
import Image from "next/image";
import AuthForm from "../../components/input/AuthForm";

export default function SignupPage() {
    return(
        <div className="bg-[#028174] min-h-screen justify-items-center p-5">
            <div className="mt-15">
                <div className="bg-white justify-items-center min-w-xl rounded-lg">
                    <div className="justify-items-center">
                        <div className="py-5"><Link href="/"><Image className="mt-5" src="/brand-logo.png" alt="Trusto" width={250} height={100}/></Link></div>

                        <h1 className="py-3 font-extrabold text-[#028174] text-4xl">Sign up</h1>
                        <p className="text-base">See what Trusto is capable of for you</p>
                    </div>

                    <div >
                        <Link href="#" className="flex items-center justify-center gap-3 rounded border mt-6 mb-12 w-110 py-4 hover:cursor-pointer transition-all shadow-sm hover:shadow hover:rounded-4xl">
                            <Image src="/google.png" alt="Trusto logo" width={30} height={30} className="rounded-lg"/>
                            <p className="px-2">Signup with Google</p>
                        </Link>
                    </div>

                    <div className="w-110">
                        <AuthForm type="text" name="name" lable="Full Name*"/>
                        <AuthForm type="email" name="email" lable="Email address*"/>
                        <AuthForm type="password" name="password" lable="Password*"/>
                    </div>

                    <div className="flex items-center gap-3 w-110">
                        <input type="checkbox" required className="h-5 w-5 accent-[#028174]"/>
                        <p className="text-lg">I agree to the <Link href="/terms" className="font-medium text-[#028174]">Terms of Service</Link> and <Link href="privacy" className="font-medium text-[#028174]">Privacy Policy</Link></p>
                    </div>

                    <div className="flex items-center justify-center">
                        <button className="mt-8 bg-[#0AB68B] text-white hover:bg-[#028174] font-bold py-4 px-4 rounded hover:cursor-pointer transition-all shadow-sm hover:shadow hover:rounded-4xl w-110">Create your Trusto account</button>
                        <br/>
                    </div>

                    <div className="py-10 mb-15">
                        <Link href="/login" className="font-medium text-lg hover:underline">Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};