# Virtual Card - :red_circle: Buzzvel :black_circle:


:diamonds: Foi criado um projeto de cartões virtuais utilizando Laravel 9 no backend e React com Tailwind CSS no front. O projeto possui duas interfaces: uma para o cadastro de dados e exibição do QR code, e outra para exibir os dados do usuário quando o QR code é lido. 

------------------------------------------------------------
:scream: Layouts das telas:
------------------------------------------------------------

Tela :one:

![screen1](https://user-images.githubusercontent.com/76126100/229078462-50a63add-a1ed-4e10-92a5-1c21f5a92352.png)

Tela 2️⃣: (http://localhost:3000/virtualcards/TestName/4bb526578e62260324fc5f1f813dac67)

![screen2](https://user-images.githubusercontent.com/76126100/229079975-494a23bb-3978-4c43-8988-563599201ee2.png)

--------------------------------------------------------------------------------------------------------
API: 
--------------------------------------------------------------------------------------------------------

:envelope: POST: 

:diamonds: Para realizar o registro dos dados de um cartão virtual, é necessário enviar um body contendo as informações necessárias para a URL 'http://localhost:8000/api/v1/virtualcards'. O corpo da requisição deve ser construído seguindo o formato de dados esperado pelo endpoint da API, com as chaves e valores correspondentes a cada informação do cartão virtual que deseja-se registrar.

```json
{
    "name": "Test Name",
    "github": "https://github.com/MatheusLousada",
    "linkedin": "https://www.linkedin.com/in/matheuslousada/",
    "observation": "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    "identifier": "c1f5a580de940130a7c51677f8f34eeb"
}
```
:bangbang: identifier = MD5(name + linkedin + github + currentDate);
:bangbang: colocar https:// nas urls;

--------------------------------------------------------------------------------------------------------

:mag_right: GET:

:diamonds:  Já para resgatar esses dados, assim como a tela que monta o cartão, é necessário faz um GET para 'http://localhost:8000/api/v1/virtualcards/:name/:identifier'.
