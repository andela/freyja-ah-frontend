import axios from 'axios';
import * as actionCreators from './types';
import { baseUrl } from '../../utils/config';

const token = localStorage.getItem('token');

/**
 * @method getProfileSuccess
 * @param {object} profile profile object
  * @returns {object}
 */
export const getProfileSuccess = profile => ({
  type: actionCreators.GET_PROFILE_SUCCESS,
  data: profile,
});

/**
 * @method getProfileFailed
 * @param {string} error profile object
  * @returns {object}
 */
export const getProfileFailed = error => ({
  type: actionCreators.GET_PROFILE_FAILED,
  error,
});

/**
 * @method  getProfile
 * @param {string} userId user id
  * @returns {object}
 */
export const getProfile = userId => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const profile = await axios.get(`${baseUrl}/profiles/${userId}`, config);
    const { data } = profile;
    const { user } = data;
    let dob = null;
    if (user.profile.dateOfBirth) {
      const dobArray = (user.profile.dateOfBirth).split('T');
      [dob] = dobArray;
    }

    const userDetails = {
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      bio: user.profile.bio,
      image: user.profile.image,
      username: user.userName,
      phoneNumber: user.profile.phoneNumber,
      socialMedia: [
        { name: 'facebook', url: user.profile.facebook },
        { name: 'twitter', url: user.profile.twitter },
        { name: 'linkedin', url: user.profile.linkedIn },
      ],
      DOB: dob,
      industry: user.profile.industry,
      yrsOfExperience: user.profile.yrsOfExperience,
      isEnrolled: user.profile.isEnrolled,
    };

    dispatch(getProfileSuccess(userDetails));
  } catch (error) {
    dispatch(getProfileFailed(error));
  }
};

/**
 * @method  uploadStart
 * @description initiates image upload
  * @returns {object}
 */
export const uploadStart = () => ({
  type: actionCreators.UPLOAD_START,
});

/**
 * @method  uploadSuccess
 * @description handles image upload success
 * @param {string} imageUrl upload image url
  * @returns {object}
 */
export const uploadSuccess = imageUrl => ({
  type: actionCreators.UPLOAD_SUCCESS,
  imageUrl,
});

/**
 * @method  uploadFailed
 * @description handles image upload failure
 * @param {object} error error object
  * @returns {object}
 */
export const uploadFailed = error => ({
  type: actionCreators.UPLOAD_FAILED,
  error,
});

/**
 * @method  uploadImage
 * @description handles image upload
 * @param {file} image image
  * @returns {object}
 */
export const uploadImage = image => async (dispatch) => {
  dispatch(uploadStart());
  const config = {
    headers: {
      'Content-type': 'multipart/form-data',
      Authorization: token,
    },
  };
  try {
    const data = new FormData();
    data.append('image', image);

    const upload = await axios.post(`${baseUrl}/image`, data, config);
    const imageUrl = upload.data.data;
    dispatch(uploadSuccess(imageUrl));
  } catch (error) {
    dispatch(uploadFailed(error.response.data));
  }
};

/**
 * @method  updateProfileFailed
 * @description handles profile update failure
 * @param {object} error update profile error
  * @returns {object}
 */
export const updateProfileFailed = error => ({
  type: actionCreators.UPDATE_PROFILE_FAILED,
  error,
});

/**
 * @method  updateProfile
 * @description handles profile update
 * @param {object} data profile data
  * @returns {object}
 */
export const updateProfile = data => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const profile = await axios.put(`${baseUrl}/profiles`, data, config);
    await dispatch(getProfile(profile.data.profile.userId));
  } catch (error) {
    dispatch(updateProfileFailed(error.response.data.error));
  }
};
