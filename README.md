**Crie o Banco de Dados**
   - Abra seu cliente MySQL ou terminal.
   - Execute o seguinte comando:
     ```sql
     CREATE DATABASE estoque;
     ```

**Configurar as Credenciais**
   - Verifique as credenciais do banco:
     - Host: `localhost`
     - Usuário: `root` (ou outro usuário configurado)
     - Senha: `sua_senha`
   - Certifique-se de que o usuário tenha permissões para acessar o banco `estoque`.

**Instale as Dependências**
   - Instale as bibliotecas do projeto:
     ```bash
     npm install
     ```

**Configuração do Arquivo .env**
   - Crie um arquivo `.env` na raiz do projeto:
     ```bash
     touch .env
     ```
   - Insira as seguintes variáveis no arquivo `.env`:
     ```plaintext
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=sua_senha
     DB_NAME=estoque
     DB_DIALECT=mysql
     PORT=3000
     ```

**Verifique se o Servidor Está Rodando**
   - O servidor será iniciado na porta configurada no `.env` (por padrão, `3000`):
     ```
     Server running on port 3000
     Database connected
     ```

**Testar o Funcionamento**
   - Use o **Postman** para testar os endpoints.
   - Exemplos de endpoints:
     - Criar produto: `POST http://localhost:3000/products`
     - Listar produtos: `GET http://localhost:3000/products`
