export const MockData = {
	Ideas: [...Array(100).keys()].map(item => ({
		author: { name: 'Brian Ogutu', avatar: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' },
		text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
		 when an unknown printer took a galley of type and scrambled it to make a 
		 type specimen book. It has survived not only five centuries, 
		 but also the leap into electronic typesetting, 
		 remaining essentially unchanged. 
		 It was popularised in the
		  1960s with the release of 
		  Letraset sheets containing L
		  orem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		time: '6:00 PM · Apr 2, 2020',
		image: 'https://res.cloudinary.com/authorsheaven/image/upload/v1571160865/57595_1521027489_qlbdng.jpg'
	}))
};
