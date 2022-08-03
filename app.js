    


            let quiz = document.querySelector('.quiz')
            let paragrafo = document.querySelector('.msg')
            let imagem = document.querySelector('.imagem')
            let answer = document.querySelector('.answer')
            
            function checarResposta( event ) {

                //desatva clique no quiz
                quiz.classList.add('inactive')

                let choice = event.target  

                choice.classList.add('clicked')

                if ( choice.classList.contains( 'correct' ) ) {
                    paragrafo.textContent = 'acertou :)'
                    imagem.src = "acertou.gif"

                    //Aplica a cor correta//
                    paragrafo.style.color = 'green'

                } else {
                    paragrafo.textContent = 'Errou feio :('
                    imagem.src = "errou.gif"

                    //Aplica a cor errada//
                    paragrafo.style.color = 'red'
                }

                //mostrando resposta certa independente de se acertou ou se errou
                answer.style.display = 'initial'
            }
            let alternativas = document.querySelectorAll( 'img' )

            for (let alternativa of alternativas ) {
            alternativa.addEventListener( 'click', checarResposta )
            }