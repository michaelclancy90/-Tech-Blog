const { Blog } = require('../models');

const blogData = [
  {
    title: 'Lorem',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at velit sit amet quam semper efficitur. Vestibulum lobortis rhoncus ex, ut faucibus mauris venenatis ac. Maecenas mollis nisl eget mollis vulputate. Nunc iaculis dolor augue, ac rutrum est convallis non. Etiam lorem magna, egestas at magna eget, porttitor aliquet ex. Duis vel elit rhoncus, mattis arcu vitae, feugiat mauris. Phasellus dui leo, fringilla sed tempus a, iaculis sed magna. Integer semper mattis leo. Donec sed ipsum odio. Nunc varius sit amet risus at malesuada. Nulla ut vestibulum urna. Duis vitae metus purus.',
    blogger_id: 1,
  },
  {
    title: 'Ipsum',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit. In at velit sit amet quam semper efficitur. Vestibulum lobortis rhoncus ex, ut faucibus mauris venenatis ac. Maecenas mollis nisl eget mollis vulputate. Nunc iaculis dolor augue, ac rutrum est convallis non. Etiam lorem magna, egestas at magna eget, porttitor aliquet ex. Duis vel elit rhoncus, mattis arcu vitae, feugiat mauris. Phasellus dui leo, fringilla sed tempus a, iaculis sed magna. Integer semper mattis leo. Donec sed ipsum odio. Nunc varius sit amet risus at malesuada. Nulla ut vestibulum urna. Duis vitae metus purus.',
    blogger_id: 2,
  },
  {
    title: 'Dolor',
    content:
      'Dolor sit amet, consectetur adipiscing elit. In at velit sit amet quam semper efficitur. Vestibulum lobortis rhoncus ex, ut faucibus mauris venenatis ac. Maecenas mollis nisl eget mollis vulputate. Nunc iaculis dolor augue, ac rutrum est convallis non. Etiam lorem magna, egestas at magna eget, porttitor aliquet ex. Duis vel elit rhoncus, mattis arcu vitae, feugiat mauris. Phasellus dui leo, fringilla sed tempus a, iaculis sed magna. Integer semper mattis leo. Donec sed ipsum odio. Nunc varius sit amet risus at malesuada. Nulla ut vestibulum urna. Duis vitae metus purus.',
    blogger_id: 3,
  },
];
const seedBlogData = () => Blog.bulkCreate(blogData);

module.exports = seedBlogData;
