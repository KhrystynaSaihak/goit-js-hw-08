import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const setStorageData = data => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const getStorageData = () => {
  if (localStorage.getItem(STORAGE_KEY)) {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  }
  return false;
};

const resetStorageData = () => {
  localStorage.removeItem(STORAGE_KEY);
};

const onInputChange = e => {
  formData.getData(e);
  setStorageData(formData);
};

const onFormSubmit = event => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const message = formElements.message.value;
  resetStorageData();
  refs.formRef.reset();

  console.log({ email, message });
};

const refs = {
  emailInp: document.querySelector('input[name="email"]'),
  messageInp: document.querySelector('textarea[name="message"]'),
  formRef: document.querySelector('.feedback-form'),
};

const formData = {
  email: '',
  message: '',
  getData: function (e) {
    const data = e.target.value;
    const name = e.target.name;
    this[name] = data;
  },
  setData: function (data) {
    this.email = data.email;
    this.message = data.message;
  },
  setDataInFields: function () {
    refs.emailInp.value = this.email;
    refs.messageInp.value = this.message;
  },
};

const savedFeedbackFormData = getStorageData();
if (savedFeedbackFormData) {
  formData.setData(savedFeedbackFormData);
  formData.setDataInFields();
}

const throttleStorageData = throttle(onInputChange, 500);

refs.emailInp.addEventListener('input', throttleStorageData);
refs.messageInp.addEventListener('input', throttleStorageData);
refs.formRef.addEventListener('submit', onFormSubmit);
