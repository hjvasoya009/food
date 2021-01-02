import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Zr0dkwHCMYffjX8APo4M061jXp7HIKrbZil-nwkJt-R5u-RH76nCG-9s1gsuWbey_FukA6rXuYsf3CmTnQY6926ZEz5zQf9fSAbCoIhXTVgeGIMfcehB51ISvM_vX3Yx'
    }
});
