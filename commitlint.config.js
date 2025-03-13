export default {
    extends: ['@commitlint/config-conventional'],

    rules: {
        'type-enum': [
            2,
            'always',
            [
                'fix',
                'refac',
                'feat',
                'remove',
                'deprecate',
                'test',
                'build',
                'docs',
                'style',
                'perf',
                'revert',
                'ci',
                'ui',
                'release',
            ],
        ],
    },
}
