import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from 'next/image'
import deved from '../public/dev-ed-wave.png';
import Todo from '../public/Todo.png';
import Beef from '../public/Beef.png';
import mybank from '../public/mybank.png';
import pomodoro from '../public/pomodoro.png';
import { useState } from 'react';
import Rick from '../public/Rick2.png';
import Netflix from '../public/Netflix.png';
import skate from '../public/skate.png'

export const Home = () => {

  const [DarkMode, setDarkMode] = useState(false);

  return (
    <div className={DarkMode ? "dark" : ""} >
      <Head>
        <title>Yuri Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-[#FCFBF4] px-10 md:px-20 lg:px-40 min-h-screen dark:bg-[#03040B]'>
        <section className=' min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>Seja bem vindo</h1>
            <ul className='flex items-center'>
              <li className='hover:scale-110 ease-in-out duration-300'><BsFillMoonStarsFill onClick={() => setDarkMode(!DarkMode)} className='cursor-pointer text-2xl dark:fill-white' /></li>
              <li className='hover:scale-110 ease-in-out duration-300'><a
                href='cv.pdf'
                download="yuri-cv"
                className='bg-cyan-700 text-white px-4 py-2 rounded-md ml-8 dark:bg-gradient-to-r from-cyan-500 to-teal-400 dark:text-black'>Curriculo
              </a>
              </li>
            </ul>
          </nav>
          <div>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
              <Image src={deved} layout="fill" objectFit='cover' alt='Foto personagem acendando' />
            </div>
          </div>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Yuri Sampaio</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Software Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-100'>Sou apaixonado em tecnologia e em programar coisas que reflitam minha personalidade. Saber que eu posso sempre aprender mais é o que me motiva
              a estudar todo dia</p>
          </div>

        </section>
        <section className='pb-8'>
          <div className='text-center'>
            <h2 className='text-5xl py-1 pt-3  text-teal-600'>Meus Projetos</h2>
            <p className='text-xl py-2 leading-8  dark:text-white'>Essa é uma pequena galeria dos projetos recentes que eu fiz e fico feliz de compartilhar o resultado!</p>
          </div>
          <div className='lg:grid lg:grid-cols-3 gap-5 pt-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-3 dark:border-2 hover:scale-105 ease-in-out duration-300'>
              <Image src={mybank} width={350} height={225} alt='foto aplicativo bancario' />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Fintech</h3>
              <a className='py-2 text-lg text-teal-600 ' href='https://github.com/YuriSamp/myBank2' rel='noreferrer' target='_blank'>Ir para o projeto</a>
              <p className='py-2 dark:text-white' >Desenvolvi esse projeto pensando em explorar mais o ecossistema React, no fim virou um lugar legal pra simular uma operação bancaria</p>
              <p className='py-2 text-gray-800 dark:text-white '> Tecnologias usadas:</p>
              <div className='flex gap-3 md:gap-8 justify-center'>
                <p className='Tags' >TypeScript</p>
                <p className='Tags'>React</p>
                <p className='Tags'>Sass</p>
              </div>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-3 dark:border-2 hover:scale-105 ease-in-out duration-300'>
              <Image src={Todo} width={350} height={226} alt='foto To-Do-list' />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>To Do List</h3>
              <a className=' py-2 text-lg text-teal-600 ' href='https://github.com/YuriSamp/TodoList-React' rel='noreferrer' target='_blank'> Ir para o projeto</a>
              <p className='py-2 dark:text-white'>Esse foi o meu primeiro projeto em React, fiz ele para aprender a passar props e controlar o estado com useState</p>
              <p className='py-2 text-gray-800 dark:text-white '> Tecnologias usadas:</p>
              <div className='flex gap-3 md:gap-8 justify-center'>
                <p className='Tags'>JavaScript</p>
                <p className='Tags'>React</p>
                <p className='Tags'>Css</p>
              </div>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-3 dark:border-2 hover:scale-105 ease-in-out duration-300'>
              <Image src={Beef} width={350} height={225} alt='foto pagina inicial restaurante' />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Restaurante</h3>
              <a className='py-2 text-lg text-teal-600 ' href='https://github.com/YuriSamp/Beef-and-Meet' rel='noreferrer' target='_blank'>Ir para o projeto</a>
              <p className='py-2 dark:text-white'>Desenvolvi esse projeto com o intuito de melhorar minhas habilidades no React-router-dom e treinar o metodo Filter do Array</p>
              <p className='py-2 text-gray-800 dark:text-white '> Tecnologias usadas:</p>
              <div className='flex gap-3 md:gap-8 justify-center'>
                <p className='Tags'>TypeScript</p>
                <p className='Tags'>React</p>
                <p className='Tags'>Sass</p>
              </div>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-3 dark:border-2 hover:scale-105 ease-in-out duration-300'>
              <Image src={Rick} width={350} height={225} alt='foto pagina inicial restaurante' />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Rick And Morty Tracker</h3>
              <a className='py-2 text-lg text-teal-600 ' href='https://github.com/YuriSamp/Earth_C-137' rel='noreferrer' target='_blank'>Ir para o projeto</a>
              <p className='py-2 dark:text-white'>Desenvolvi esse projeto com o intuito criar um app com as informações de todos os personagens da série, para isso eu consumi a Api publica de Rick And Morty</p>
              <p className='py-2 text-gray-800 dark:text-white '> Tecnologias usadas:</p>
              <div className='flex gap-3 md:gap-8 justify-center'>
                <p className='Tags'>TypeScript</p>
                <p className='Tags'>React</p>
                <p className='Tags'>Tailwind </p>
              </div>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-3 dark:border-2 hover:scale-105 ease-in-out duration-300'>
              <Image src={Netflix} width={350} height={225} alt='foto pagina inicial restaurante' />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Netflix Clone</h3>
              <a className='py-2 text-lg text-teal-600 ' href='https://netflix-clone-mu-topaz.vercel.app' rel='noreferrer' target='_blank'>Ir para o projeto</a>
              <p className='py-2 dark:text-white'>Eu queria recriar a UI de algo famoso então optei pela netflix, foi um projeto bem bacana que eu consegui aprender mais sobre Next, varrer a documentação do tailwind e outras coisas</p>
              <p className='py-2 text-gray-800 dark:text-white '> Tecnologias usadas:</p>
              <div className='flex gap-3 md:gap-8 justify-center'>
                <p className='Tags'>TypeScript</p>
                <p className='Tags'>Next</p>
                <p className='Tags'>Tailwind</p>
              </div>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-3 dark:border-2 hover:scale-105 ease-in-out duration-300'>
              <Image src={skate} width={350} height={225} alt='foto pagina inicial restaurante' />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Thrasher Magazine</h3>
              <a className='py-2 text-lg text-teal-600 ' href='https://skate-lake.vercel.app' rel='noreferrer' target='_blank'>Ir para o projeto</a>
              <p className='py-2 dark:text-white'>Esse projeto foi bem simples, só queria estruturar a UI de um site de Skate, depois pretendo adicionar uma loja, firebase, stripe e coisas mais compelxas</p>
              <p className='py-2 text-gray-800 dark:text-white '> Tecnologias usadas:</p>
              <div className='flex gap-3 md:gap-8 justify-center'>
                <p className='Tags'>TypeScript</p>
                <p className='Tags'>Next</p>
                <p className='Tags'>Tailwind</p>
              </div>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-3 dark:border-2 hover:scale-105 ease-in-out duration-300'>
              <Image src={pomodoro} width={350} height={225} alt='foto pagina inicial restaurante' />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Pomodoro</h3>
              <a className='py-2 text-lg text-teal-600 ' href='https://pomodoro-pi-ten.vercel.app' rel='noreferrer' target='_blank'>Ir para o projeto</a>
              <p className='py-2 dark:text-white'>Podomoro pra quem gosta de metodos de estudo, pra mim não funciona, mas foi legal de fazer e ate usei pela primeira vez o useRef</p>
              <p className='py-2 text-gray-800 dark:text-white '> Tecnologias usadas:</p>
              <div className='flex gap-3 md:gap-8 justify-center'>
                <p className='Tags'>TypeScript</p>
                <p className='Tags'>React</p>
                <p className='Tags'>Tailwind</p>
              </div>
            </div>
          </div>
        </section>

        <section className='flex flex-col items-center py-10'>
          <h2 className='text-5xl py-4 text-teal-600 md:text-6xl'>Sobre mim</h2>
          <article className='py-6 w-1/2 text-xl dark:text-white'>
            Olá! Eu sou um desenvolvedor de software com o foco em Front-end,
            estou estudando há um pouco mais de 1 ano, escolhi essa carreira porque desde pequeno eu sempre tive curiosidade por aprender como as coisas funcionavam por
            trás da interface do usuário, portanto busco sempre me especializar e entregar a melhor experiência que o usuario possa vir a ter com minhas criações.
          </article>
          <article className='py-6 w-1/2 text-xl dark:text-white'>
            Constantemente estou estudando para melhorar os meus conhecimentos e ficar antenado nas tecnologias do mercado,
            no momento eu to vendo NodeJs e Golang, porque eu quero entender melhor a conexão que back-end possui ao entregar as APIs para o Front-End consumir,
            entretanto o React/Next é o meu foco.
          </article>
          <article className='py-6 w-1/2 text-xl dark:text-white'>
            Uma das coisas que eu faço no meu tempo vago é sempre estar presente na comunidade da Alura tirando duvidas sobre programação para ajudar cada vez mais gente a entrar na área,
            também crio conteudo para o linkedin transmitindo o que ja aprendi e futuramente pretendo contribuir com alguns projetos open source!
          </article>
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


