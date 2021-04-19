import Mustache from 'mustache'
import i18next from 'i18next';

/**
 * Returns all the distinct keys defined in a translations object; the translations object is of following structure:
 *     const translations = {
 *       en: {
 *         key1: 'Something',
 *         key2: 'Some other thing'
 *       },
 *       pl: {
 *         key1: 'Coś',
 *         key3: 'Rusztowanie'
 *       },
 *       ru: {
 *         ...
 *       }
 *       ...
 *     }
 *
 *
 * E.g. for the object above, the result of getAllTranslationKeys(translations) is:
 *     ['key1', 'key2', 'key3']
 */
function getAllTranslationKeys(translations) {
  return [...new Set((Object.keys(translations)).flatMap(language => Object.keys(translations[language])))];
}

/**
 * Replaces all occurences of t{{key}} with values translated by i18next
 */
const translate = (template, prefix, translations) => {
  const translationKeys = getAllTranslationKeys(translations);
  const data = {};
  translationKeys.map(translationKey =>
    data[translationKey] = i18next
        .t(
        `${prefix ? prefix + ':' : ''}${translationKey}`,
        { 'interpolation': {'escapeValue': false} }
        )
  );
  return Mustache.render(template, data, {}, ['t{{', '}}'])
};

export {
  translate,
}