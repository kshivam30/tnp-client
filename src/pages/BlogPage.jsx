import React from 'react';
import Layout from '../layout/Layout';
import Post from '../components/Post';
import { Box, Button, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const BlogPage = () => {
  // Example posts data
  const posts = [
    {
      id: 1,
      author: 'John Doe',
      content: 'This is the content of the first post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      likes: 15,
    },
    {
      id: 2,
      author: 'Jane Smith',
      content: 'Second post content goes here. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias voluptatum maxime minima excepturi. Iste sapiente asperiores qui. Quasi architecto, eius itaque asperiores aspernatur nemo minima odio nihil illum dicta sint distinctio, autem illo expedita mollitia reiciendis a dolore hic officia et ducimus suscipit. Optio facilis sed quisquam cum voluptatibus, ducimus obcaecati dignissimos tempora animi libero autem tempore provident est, doloribus asperiores inventore maiores perferendis labore, perspiciatis odit? Numquam quos facilis aperiam dolor similique in, dolorum modi repellendus debitis illo labore, delectus, sed impedit quis maiores saepe culpa laudantium laboriosam assumenda vitae distinctio? Doloribus perspiciatis dolorum fugiat deserunt libero neque esse, nulla minus rerum dolore consequatur amet, repellat sit officiis quasi, facere velit enim ducimus mollitia maxime numquam ea exercitationem? Soluta molestias odio sit laudantium laboriosam aliquid reprehenderit quibusdam perspiciatis ducimus accusantium, error hic sunt facere similique, inventore, dolorem quia non? Facere voluptas obcaecati porro velit, illo ullam quod eum officia iste, asperiores repellat corrupti saepe ad unde assumenda magnam, blanditiis exercitationem dolor? Unde corrupti voluptatibus temporibus ipsa fugit eligendi sit consectetur in dignissimos dolores reprehenderit ducimus possimus vero, asperiores dolorum numquam laborum aperiam quam alias aliquam modi, iste eveniet exercitationem facere. Consequuntur ea voluptas dolorem ex possimus pariatur? In numquam aliquam harum nostrum iste nesciunt recusandae quibusdam minus molestiae quae assumenda facere repellat cupiditate amet eaque aliquid voluptatem provident cumque possimus et unde nam deleniti, architecto blanditiis? Laboriosam molestias voluptatum repudiandae quibusdam saepe. Cumque, dolore voluptatum nam adipisci repellat quis! Quaerat provident ex voluptatum blanditiis sequi inventore autem aliquam iure. Quia, ipsam. Fuga totam dolorem quo vel amet quaerat facere omnis sunt nesciunt nam voluptate dicta ratione unde placeat eaque perspiciatis aliquid, ipsam, possimus ab error quae nisi! Id fugiat eius corrupti cupiditate explicabo consectetur, dolorum dolorem officiis labore veritatis reiciendis at atque libero harum eaque delectus odio omnis optio sunt commodi dolores distinctio ad. Facere velit perferendis quisquam, hic repellat ullam dicta dolor temporibus quae quod vitae eius, officia rem, voluptate nemo iusto. Tenetur, tempore deleniti! Nesciunt repellendus dolor perspiciatis cupiditate reiciendis quam nam nostrum, facilis delectus asperiores soluta, nihil esse architecto dicta! Quod dolorem eum nihil enim veniam a laboriosam fugit suscipit, perferendis id, nisi eos molestias. Ea aliquam modi assumenda deleniti reprehenderit ab voluptate excepturi, illo provident fugiat expedita debitis vitae accusantium doloremque molestias optio dolorem odit at magnam repellendus soluta doloribus. Expedita voluptatum sapiente voluptates nam eligendi facilis rerum dicta nobis, a aut, minima explicabo amet! Nostrum iure eius veniam in sit eligendi consectetur nobis possimus adipisci tenetur quisquam, illum aspernatur accusamus perspiciatis voluptas dicta labore, inventore maiores et itaque. Perferendis reprehenderit non quod tempora quasi ipsa incidunt officia doloribus officiis illo. Labore cum ducimus, nostrum sint nobis nam omnis quam iure ad. Molestiae, ducimus. Facere sunt laboriosam iure, asperiores repellendus a adipisci similique dolorum dolore, vitae fugiat! At totam maxime obcaecati, harum optio blanditiis quaerat. Veniam aliquam quas facilis facere necessitatibus eveniet consectetur, dolor sapiente asperiores, commodi cumque expedita natus harum. Dignissimos, nam neque veniam nihil dicta repellendus, aliquam suscipit porro maiores quam earum ea laboriosam in deleniti. Unde asperiores impedit repellat nihil at! Earum recusandae esse officia. Ex, possimus quas. Exercitationem fugit dolores quaerat reiciendis quia odit, ad debitis quos id architecto. Nemo iste est quas rerum at minus, accusantium illum doloribus hic, tenetur assumenda aperiam? Consequatur laborum explicabo consequuntur numquam. Aspernatur, iste recusandae nulla laudantium placeat ea numquam doloribus!',
      likes: 10,
    },
    // Add more example posts as needed
  ];

  return (
    <Layout>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%' }}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} content={post.content} likes={post.likes} />
          ))}
        </div>
        <Box sx={{ position: 'fixed', bottom: '16px', right: '16px' }}>
          <Fab color="primary" aria-label="add blog">
            <AddIcon />
          </Fab>
        </Box>
      </Box>
    </Layout>
  );
};

export default BlogPage;