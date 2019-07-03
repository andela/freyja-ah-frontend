import axios from 'axios';
import * as actionCreators from '../constants/profileContants';

const url = 'https://freyja-ah-backend.herokuapp.com/api/profiles';
const token = localStorage.getItem('jwtToken');
export const getProfileSuccess = profile => ({
  type: actionCreators.GET_PROFILE_SUCCESS,
  data: profile,
});

export const getProfileFailed = error => ({
  type: actionCreators.GET_PROFILE_FAILED,
  error,
});
export const getProfile = userId => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const profile = await axios.get(`${url}/${userId}`, config);
    const { data } = profile;
    const { user } = data;

    const userDetails = {
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      bio: user.profile.bio,
      image: user.profile.image || 'https://cdn.umnbootcamp.com/wp-content/uploads/sites/93/2018/03/placeholder-person.png',
      username: user.userName,
      phoneNumber: user.profile.phoneNumber,
      socialMedia: [
        { name: 'facebook', url: user.profile.facebook },
        { name: 'twitter', url: user.profile.twitter },
        { name: 'linkedin', url: user.profile.linkedIn },
      ],
      DOB: user.profile.dateOfBirth,
      industry: user.profile.industry,
      yrsOfExperience: user.profile.yrsOfExperience,
    };

    dispatch(getProfileSuccess(userDetails));
  } catch (error) {
    dispatch(getProfileFailed(error));
  }
};
