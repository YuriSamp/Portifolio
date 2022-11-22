import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from 'next/image'
import deved from '../public/dev-ed-wave.png';
import Todo from '../public/Todo.png';
import Beef from '../public/Beef.png';
import mybank from '../public/mybank.png';
import { useState } from 'react';
import Rick from '../public/Rick.png';

export const Home = () => {

  const [DarkMode, setDarkMode] = useState(false);

  return (
    <div className={DarkMode ? "dark" : ""} >
      <Head>
        <title>Yuri Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 min-h-screen dark:bg-black'>
        <section className=' min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>Seja bem vindo</h1>
            <ul className='flex items-center'>
              <li className='hover:scale-110 ease-in-out duration-300'><BsFillMoonStarsFill onClick={() => setDarkMode(!DarkMode)} className='cursor-pointer text-2xl dark:fill-white' /></li>
              <li className='hover:scale-110 ease-in-out duration-300'><a
                href='Curriculo.pdf'
                download="yuri-cv"
                className='bg-cyan-700 text-white px-4 py-2 rounded-md ml-8 dark:bg-gradient-to-r from-cyan-500 to-teal-400 dark:text-black  '>Curriculo
              </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Yuri Sampaio</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Front-end Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-100'>Sou apaixonado em tecnologia e em programar coisas que reflitam minha personalidade. Saber que eu posso sempre aprender mais é o que me motiva
              a estudar todo dia</p>
          </div>
          <div>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
              <Image src={deved} layout="fill" objectFit='cover' alt='Foto personagem acendando' />
            </div>
          </div>
        </section>
        <section>
          <div className='text-center'>
            <h3 className='text-5xl py-1 pt-3  text-teal-600'>Meus Projetos</h3>
            <p className='text-xl py-2 leading-8  dark:text-white'>Desde que eu comecei meus estudos em programação
              eu consegui desenvovler algumas coisas legais, vem dar uma olhada!</p>
          </div>
          <div className='lg:grid lg:grid-cols-3 gap-5 '>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:border-2 hover:scale-105 ease-in-out duration-300'>
              <Image src={mybank} width={350} height={225} alt='foto aplicativo bancario' />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>fintech bancaria</h3>
              <a className='py-2 text-lg text-teal-600 ' href='https://github.com/YuriSamp/myBank2' rel='noreferrer' target='_blank'>Ir para o projeto</a>
              <p className='py-2 dark:text-white' >Desenvolvi esse projeto pensando em explorar mais o ecosistema React, no fim virou um lugar legal pra simular uma operação bancaria</p>
              <p className='py-2 text-gray-800 dark:text-white '> Tecnologias usadas:</p>
              <div className='flex gap-3 md:gap-8 justify-center'>
                <p className='text-gray-800 py-1 dark:text-white border-2 p-2 border-teal-600 rounded-full' >TypeScript</p>
                <p className='text-gray-800 py-1 dark:text-white border-2 p-2 border-teal-600 rounded-full'>React</p>
                <p className='text-gray-800 py-1 dark:text-white border-2 p-2 border-teal-600 rounded-full'>Sass</p>
              </div>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:border-2 hover:scale-105 ease-in-out duration-300'>
              <Image src={Todo} width={350} height={226} alt='foto To-Do-list' />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>To Do List</h3>
              <a className=' py-2 text-lg text-teal-600 ' href='https://github.com/YuriSamp/TodoList-React' rel='noreferrer' target='_blank'> Ir para o projeto</a>
              <p className='py-2 dark:text-white'>Esse foi o meu primeiro projeto em React, fiz ele para aprender a passar props e controlar o estado com useState</p>
              <p className='py-2 text-gray-800 dark:text-white '> Tecnologias usadas:</p>
              <div className='flex gap-3 md:gap-8 justify-center'>
                <p className='text-gray-800 py-1 dark:text-white border-2 p-2 border-teal-600 rounded-full'>JavaScript</p>
                <p className='text-gray-800 py-1 dark:text-white border-2 p-2 border-teal-600 rounded-full'>React</p>
                <p className='text-gray-800 py-1 dark:text-white border-2 p-2 border-teal-600 rounded-full'>Css</p>
              </div>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:border-2 hover:scale-105 ease-in-out duration-300'>
              <Image src={Beef} width={350} height={225} alt='foto pagina inicial restaurante' />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Site de Restaurante</h3>
              <a className='py-2 text-lg text-teal-600 ' href='https://github.com/YuriSamp/Beef-and-Meet' rel='noreferrer' target='_blank'>Ir para o projeto</a>
              <p className='py-2 dark:text-white'>Desenvolvi esse projeto com o intuito de melhorar minhas habilidades no React-router-dom e treinar o metodo Filter do Array</p>
              <p className='py-2 text-gray-800 dark:text-white '> Tecnologias usadas:</p>
              <div className='flex gap-3 md:gap-8 justify-center'>
                <p className='text-gray-800 py-1 dark:text-white border-2 p-2 border-teal-600 rounded-full'>TypeScript</p>
                <p className='text-gray-800 py-1 dark:text-white border-2 p-2 border-teal-600 rounded-full'>React</p>
                <p className='text-gray-800 py-1 dark:text-white border-2 p-2 border-teal-600 rounded-full'>Sass</p>
              </div>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:border-2 hover:scale-105 ease-in-out duration-300'>
              <Image src={Rick} width={350} height={225} alt='foto pagina inicial restaurante' />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Rick And Morty Tracker</h3>
              <a className='py-2 text-lg text-teal-600 ' href='https://github.com/YuriSamp/Earth_C-137' rel='noreferrer' target='_blank'>Ir para o projeto</a>
              <p className='py-2 dark:text-white'>Desenvolvi esse projeto com o intuito criar um app com as informações de todos os personagens da série, para isso eu consumi a Api publica de Rick And Morty</p>
              <p className='py-2 text-gray-800 dark:text-white '> Tecnologias usadas:</p>
              <div className='flex gap-3 md:gap-8 justify-center'>
                <p className='text-gray-800 py-1 dark:text-white border-2 p-2 border-teal-600 rounded-full'>TypeScript</p>
                <p className='text-gray-800 py-1 dark:text-white border-2 p-2 border-teal-600 rounded-full'>React</p>
                <p className='text-gray-800 py-1 dark:text-white border-2 p-2 border-teal-600 rounded-full'>Axios</p>
              </div>
            </div>
          </div>
        </section>
        <footer className='border-t-2 py-10'>
          <p className='py-2 text-center md:text-xl dark:text-white'> Feito com carinho, NextJs e Tailwind Css</p>
          <div className='text-5xl flex justify-center gap-12 py-3 text-teal-600 lg:gap-16'>
            <a href='https://twitter.com/Yuri_Sampa' rel='noreferrer' target="_blank"><AiFillTwitterCircle className='cursor-pointer hover:scale-125 ease-in-out duration-300' /></a>
            <a href='https://www.linkedin.com/in/yurisamp/' rel='noreferrer' target="_blank"><AiFillLinkedin className='cursor-pointer hover:scale-125 ease-in-out duration-300' /></a>
            <a href='https://github.com/YuriSamp' rel='noreferrer' target='_blank'><AiFillGithub className='cursor-pointer hover:scale-125 ease-in-out duration-300' /></a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default Home
