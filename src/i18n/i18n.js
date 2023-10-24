import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';
import en from './en.json';
import ru from './ru.json';

addMessages('ru', ru);
addMessages('en', en);

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});
