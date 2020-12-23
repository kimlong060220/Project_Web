import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Nghia',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Long',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Garmin Fenix',
      category: 'watch',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Garmin',
      rating: 4.5,
      numReviews: 10,
      description: 'Đồng hồ thông minh',
      productdetails: [
        {
          col1: 'mặt kính',
          col2: 'saphire'
        },
        {
          col1: 'size',
          col2: '44'
        }
      ],
      descrip: [
        {title : "Hiệu suất vượt trội"  , des : "Trang bị bộ vi xử lý Intel thế hệ thứ 10, IdeaPad S145 được thiết kế để giúp bạn hoàn thành công việc tốt nhất. Nó cũng đi kèm với một loạt các tùy chọn lưu trữ an toàn, bao gồm một SSD lai với ổ đĩa cứng, đảm bảo thời gian phản hồi thậm chí còn nhanh hơn."},
      ]
    },
    {
      name: 'Garmin Fenix 2',
      category: 'watch',
      image: '/images/p2.jpg',
      price: 100,
      countInStock: 20,
      brand: 'Garmin',
      rating: 4.0,
      numReviews: 10,
      description: 'Đồng hồ thông minh',
      productdetails: [
        {
          col1: 'mặt kính',
          col2: 'saphire'
        },
        {
          col1: 'size',
          col2: '44'
        }
      ],
      descrip: [
        {title : "Hiệu suất vượt trội"  , des : "Trang bị bộ vi xử lý Intel thế hệ thứ 10, IdeaPad S145 được thiết kế để giúp bạn hoàn thành công việc tốt nhất. Nó cũng đi kèm với một loạt các tùy chọn lưu trữ an toàn, bao gồm một SSD lai với ổ đĩa cứng, đảm bảo thời gian phản hồi thậm chí còn nhanh hơn."},
      ]

    },
    {
      name: 'Máy tính Fujusu',
      category: 'computer',
      image: '/images/p3.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Dell',
      rating: 4.8,
      numReviews: 17,
      description: 'máy tính dell',
      productdetails: [
        {
          col1: 'mặt kính',
          col2: 'saphire'
        },
        {
          col1: 'size',
          col2: '44'
        }
      ],
      descrip: [
        {title : "Hiệu suất vượt trội"  , des : "Trang bị bộ vi xử lý Intel thế hệ thứ 10, IdeaPad S145 được thiết kế để giúp bạn hoàn thành công việc tốt nhất. Nó cũng đi kèm với một loạt các tùy chọn lưu trữ an toàn, bao gồm một SSD lai với ổ đĩa cứng, đảm bảo thời gian phản hồi thậm chí còn nhanh hơn."},
      ]
    },
    {
      name: 'Màn Lenovo',
      category: 'Screen',
      image: '/images/p4.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Lenovo',
      rating: 4.5,
      numReviews: 14,
      description: 'màn hình zin',
      productdetails: [
        {
          col1: 'mặt kính',
          col2: 'saphire'
        },
        {
          col1: 'size',
          col2: '44'
        }
      ],
      descrip: [
        {title : "Hiệu suất vượt trội"  , des : "Trang bị bộ vi xử lý Intel thế hệ thứ 10, IdeaPad S145 được thiết kế để giúp bạn hoàn thành công việc tốt nhất. Nó cũng đi kèm với một loạt các tùy chọn lưu trữ an toàn, bao gồm một SSD lai với ổ đĩa cứng, đảm bảo thời gian phản hồi thậm chí còn nhanh hơn."},
      ]
    },
    {
      name: 'Máy tính Dell pro',
      category: 'computer',
      image: '/images/p5.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Dell',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
      productdetails: [
        {
          col1: 'mặt kính',
          col2: 'saphire'
        },
        {
          col1: 'size',
          col2: '44'
        }
      ],
      descrip: [
        {title : "Hiệu suất vượt trội"  , des : "Trang bị bộ vi xử lý Intel thế hệ thứ 10, IdeaPad S145 được thiết kế để giúp bạn hoàn thành công việc tốt nhất. Nó cũng đi kèm với một loạt các tùy chọn lưu trữ an toàn, bao gồm một SSD lai với ổ đĩa cứng, đảm bảo thời gian phản hồi thậm chí còn nhanh hơn."},
      ]
    },
    {
      name: 'Máy tính dell XP',
      category: 'computer',
      image: '/images/p6.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Dell',
      rating: 4.5,
      numReviews: 15,
      description: 'máy tính',
      productdetails: [
        {
          col1: 'mặt kính',
          col2: 'saphire'
        },
        {
          col1: 'size',
          col2: '44'
        }
      ],
      descrip: [
        {title : "Hiệu suất vượt trội"  , des : "Trang bị bộ vi xử lý Intel thế hệ thứ 10, IdeaPad S145 được thiết kế để giúp bạn hoàn thành công việc tốt nhất. Nó cũng đi kèm với một loạt các tùy chọn lưu trữ an toàn, bao gồm một SSD lai với ổ đĩa cứng, đảm bảo thời gian phản hồi thậm chí còn nhanh hơn."},
      ]
    },
  ],
};
export default data;
