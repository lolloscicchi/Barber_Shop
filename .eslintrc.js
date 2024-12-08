module.exports = {
    extends: [
        'expo',
        'prettier',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-native/all',
    ],
    plugins: ['prettier', '@react-native', 'unused-imports'],
    rules: {
        'react-native/sort-styles': 'off',
        'react-native/no-color-literals': 'off',
        'prettier/prettier': ['error', { endOfLine: 'crlf' }],
        'unused-imports/no-unused-imports': 'error',
        'no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        name: 'react-native-gesture-handler',
                    },
                ],
            },
        ],
    },
};
