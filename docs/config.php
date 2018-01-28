<?php

return [
    'baseUrl'           => '',
    'production'        => false,
    'collections'       => [],
    'config'            => json_decode(file_get_contents(__DIR__ . '/tailwind.json'), true),
    'version'           => json_decode(file_get_contents(__DIR__ . '/../package.json'), true)['version'],
    'colors'            => ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'],
    'active'            => function ($page, $path) {
        if ($page->getPath() == ltrim($path, '/'))
            return true;

        $pages = collect(array_wrap($page));

        return $pages->contains(function ($page) use ($path) {
            return str_contains($page->getPath(), $path);
        });
    },
    'anyChildrenActive' => function ($page, $children) {
        return $children->contains(function ($link) use ($page) {
            return $page->getPath() == '/' . ltrim($link, '/');
        });
    },
    'navigation'        => require_once('navigation.php'),
    'previous'          => function ($page) {

        $navigation = collect($page->navigation)->flatten()->map(function ($value) {
            return trim($value, '/');
        })->all();

        $currentPage = trim($page->getPath(), '/');

        $index = array_search($currentPage, $navigation, true);

        if ($index > 0) {

            $slug = $navigation[$index - 1];

            return $page->baseUrl . '/' . $slug;
        }

        return null;
    },
    'next'              => function ($page) {

        $navigation = collect($page->navigation)->flatten()->map(function ($value) {
            return trim($value, '/');
        })->all();

        $currentPage = trim($page->getPath(), '/');

        $count = count($navigation);

        $index = array_search($currentPage, $navigation, true);

        if ($index + 1 < $count) {
            $slug = $navigation[$index + 1];

            return $page->baseUrl . '/' . $slug;
        }

        return null;
    },
];
