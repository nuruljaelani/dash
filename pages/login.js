import Link from 'next/link'
import React from 'react'
import { HeadSide } from '../components/head'

const Login = () => {
    return (
        <>
				<HeadSide />
				<div>
						<main className="h-screen bg-indigo-100 w-full m-0 p-0 items-center flex">
							<div className="bg-white shadow-lg rounded-xl p-4 mx-auto w-3/4 md:w-1/3">
								<div className="flex justify-center items-center mb-2">
									<img src="/logo.png" className="w-8 md:w-10" />
									<p className="font-semibold text-2xl md:text-4xl ml-2 text-cyan-500">SIAKAD</p>
								</div>
								<p className="text-sm md:text-base text-gray-500 text-center font-sans mb-2">Sistem Informasi Akademik</p>
								<hr/>
								<div className="flex flex-col px-2 md:px-4 my-4">
									<p className="font-semibold text-lg md:text-2xl text-gray-600">Sign In</p>
									<form className="mt-6">
										<div className="flex flex-col mb-4">
											<label className="text-sm font-normal text-gray-500 mb-2">Email</label>
											<input type="text" className="text-sm md:text-base border border-gray-400 rounded-3xl p-2 focus:outline-none focus:border-cyan-600" />
										</div>
										<div className="flex flex-col mb-2">
											<label className="text-sm font-normal text-gray-500 mb-2">Password</label>
											<input type="password" className="text-sm md:text-base border border-gray-400 rounded-3xl p-2 focus:outline-none focus:border-cyan-600" />
										</div>
										<p className="text-cyan-500 text-xs">Lupa Password ?</p>
										<button className="bg-cyan-600 rounded-3xl hover:bg-cyan-700 text-white py-3 text-center w-full mt-4 text-sm md:text-base font-semibold" type="button">
											Login
										</button>
										<div className="flex mt-4">
											<p className="text-sm text-gray-500 mr-1">Belum punya akun ?</p>
											<Link href="/register">
												<a className="text-sm text-cyan-500">Daftar</a>
											</Link>
										</div>
									</form>
								</div>
							</div>
						</main>  
				</div>
        </>
    )
}

export default Login
