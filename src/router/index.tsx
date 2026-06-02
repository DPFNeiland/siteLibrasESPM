import { createHashRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import GlossaryPage from '../pages/GlossaryPage/GlossaryPage';

/**
 * Rotas da aplicação.
 * Para adicionar uma nova página:
 *   1. Crie o arquivo em src/pages/NomeDaPagina/
 *   2. Adicione um novo objeto { path, element } abaixo.
 */
const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dicionario/tecnologia" replace />,
      },
      {
        path: 'dicionario/tecnologia',
        element: <GlossaryPage />,
      },
      // Exemplo de expansão futura:
      // {
      //   path: 'dicionario/saude',
      //   element: <GlossaryPage tema="Saúde" />,
      // },
    ],
  },
]);

export default router;
