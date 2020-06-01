import { Profile } from '../store/profile/actions/interfaces';
import { Action } from '../store/interfaces';
import { USER_DETAILS } from '../store/profile/actionTypes';
import { SIGN_UP_SUCCESS, SIGN_UP_ERROR } from '../store/signUp/actionTypes';
import { SIGN_UP_STAGES } from '../utils';

export const MockData = {
  Ideas: [...Array(100).keys()].map((item) => ({
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
    image: 'https://res.cloudinary.com/authorsheaven/image/upload/v1571160865/57595_1521027489_qlbdng.jpg',
  })),
};

export const testUser: Profile = {
  firstName: 'Brian',
  lastName: 'Ogutu',
  avatar: '',
  username: 'Ogutu-Brian',
};

export const blankTestAction: Action = {
  type: '',
  payload: '',
};

export const blankProfile: Profile = {
  username: '',
  avatar: '',
  firstName: '',
  lastName: '',
};

export const userDetailsAction: Action = {
  type: USER_DETAILS,
  payload: testUser,
};

export const successSignUpAction: Action = {
  type: SIGN_UP_SUCCESS,
  payload: {
    firstName: 'test name',
    lastName: 'test name',
    stage: SIGN_UP_STAGES.VERIFY,
  },
};

export const signUpErrorAction: Action = {
  type: SIGN_UP_ERROR,
  payload: {},
};
export const placeHolderImage: string =
  'https://res.cloudinary.com/authorsheaven/image/upload/v1571160865/57595_1521027489_qlbdng.jpg';

export const profileImage: string =
  'https://res.cloudinary.com/authorsheaven/image/upload/v1589328450/gogo-tomago-hiro-hamada-honey-lemon-tadashi-hamada-animated-film-hero-girl-png-clip-art_afcrtp.png';

export const coverImage: string =
  'https://res.cloudinary.com/authorsheaven/image/upload/v1589369726/93116121_121490372835917_5356212706493857792_o_evnivw.jpg';
