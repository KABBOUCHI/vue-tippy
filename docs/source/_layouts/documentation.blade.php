@extends('_layouts.master')

@section('meta')

@endsection

@push('headScripts')
    <script src="{{ mix('/js/nav.js') }}"></script>
@endpush

@section('body')
    <div class="min-h-screen">
        <div id="sidebar"
             class="hidden z-50 fixed pin-y pin-l overflow-y-scroll md:overflow-visible scrolling-touch md:scrolling-auto bg-grey-lighter w-4/5 md:w-full md:max-w-xs flex-none border-r-2 border-grey-light md:flex flex-col">
            <div class="border-b border-grey-light flex-none px-8 py-6">
                <div class="mb-4">
                    <div class="hidden md:flex md:justify-center">
                        <a href="/" class="flex justify-center">
                            <svg width="111px" height="92px" viewBox="0 0 222 184" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->
                                <defs>
                                    <rect id="path-1" x="90.7780977" y="135.681765" width="40" height="40"
                                          rx="5"></rect>
                                    <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox"
                                          x="0" y="0" width="40" height="40" fill="white">
                                        <use xlink:href="#path-1"></use>
                                    </mask>
                                    <linearGradient x1="6.21993923%" y1="1.53665412%" x2="96.5620339%" y2="30.4905087%"
                                                    id="linearGradient-3">
                                        <stop stop-color="#A458FF" offset="0%"></stop>
                                        <stop stop-color="#FFA887" offset="18.4490593%"></stop>
                                        <stop stop-color="#FFDA90" offset="18.6084981%"></stop>
                                        <stop stop-color="#FFFFFF" offset="53.7527902%"></stop>
                                        <stop stop-color="#73FFD5" offset="53.7941586%"></stop>
                                        <stop stop-color="#78FFD6" offset="55.7374589%"></stop>
                                        <stop stop-color="#435466" offset="100%"></stop>
                                        <stop stop-color="#435466" offset="100%"></stop>
                                    </linearGradient>
                                    <rect id="path-4" x="0.0116328814" y="0.147055547" width="221.53293"
                                          height="157.580832" rx="20"></rect>
                                    <mask id="mask-5" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox"
                                          x="0" y="0" width="221.53293" height="157.580832" fill="white">
                                        <use xlink:href="#path-4"></use>
                                    </mask>
                                </defs>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Artboard">
                                        <use id="Rectangle-3" stroke="#4dba87" mask="url(#mask-2)" stroke-width="20"
                                             fill="#435466"
                                             transform="translate(110.778098, 155.681765) rotate(-315.000000) translate(-110.778098, -155.681765) "
                                             xlink:href="#path-1"></use>
                                        <use id="Rectangle" stroke="#4dba87" mask="url(#mask-5)" stroke-width="20"
                                             fill="url(#linearGradient-3)" xlink:href="#path-4"></use>
                                        <ellipse id="Oval" fill="#243A59" cx="76.3220539" cy="78.8703424"
                                                 rx="9.00019972" ry="8.90879267"></ellipse>
                                        <ellipse id="Oval" fill="#243A59" cx="145.234142" cy="78.8703424"
                                                 rx="9.00019972" ry="8.90879267"></ellipse>
                                        <path d="M87.1387933,103.247251 C87.1387933,103.247251 107.917826,122.782037 134.417402,103.247251"
                                              id="Path-2" stroke="#4dba87" stroke-width="10"
                                              stroke-linecap="round"></path>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <p class="text-center">
                        <a href="https://github.com/kabbouchi/vue-tippy/releases"
                           class="text-sm hover:text-grey-dark text-grey font-semibold">v{{ $page->version }}</a>
                    </p>
                </div>
                <div class="relative">
                    <input id="docsearch"
                           class="placeholder-grey-dark rounded border border-grey-light py-2 pr-4 pl-10 block w-full appearance-none bg-grey-lighter"
                           type="text" placeholder="Search the docs" disabled>
                    <div class="pointer-events-none absolute pin-y pin-l pl-3 flex items-center">
                        <svg class="fill-current pointer-events-none text-grey-darker w-4 h-4"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="p-8 flex-1 overflow-y-scroll">
                <nav id="nav" class="text-base overflow-y-scroll">
                    @foreach ($page->navigation as $sectionName => $sectionItems)
                        <div class="mb-8">
                            <p class="mb-4 text-grey-dark uppercase tracking-wide font-bold text-xs">{{ $sectionName }}</p>
                            <ul>
                                @foreach ($sectionItems as $name => $slugOrChildren)
                                    @if (is_string($slugOrChildren))
                                        <li class="mb-3"><a
                                                    class="hover:underline {{ $page->active('/' . $slugOrChildren) ? 'text-black font-bold' : 'text-grey-darkest' }}"
                                                    href="{{ $page->baseUrl }}/{{ ltrim($slugOrChildren,'/') }}">{{ $name }}</a>
                                        </li>
                                    @else
                                        <li class="mb-3">
                                            <a href="{{ $page->baseUrl }}/{{ $slugOrChildren->first() }}"
                                               class="hover:underline block mb-2 {{ $page->anyChildrenActive($slugOrChildren) ? 'text-black font-bold' : 'text-grey-darkest' }}">{{ $name }}</a>
                                            <ul class="pl-4 {{ $page->anyChildrenActive($slugOrChildren) ? 'block' : 'hidden' }}">
                                                @foreach ($slugOrChildren as $title => $link)
                                                    <li class="mb-3">
                                                        <a class="hover:underline {{ $page->active('/' . $link) ? 'text-black font-bold' : 'text-grey-darkest' }}"
                                                           href="{{ $page->baseUrl }}/{{ $link }}">
                                                            {{ $title }}
                                                        </a>
                                                    </li>
                                                @endforeach
                                            </ul>
                                        </li>
                                    @endif
                                @endforeach
                            </ul>
                        </div>
                    @endforeach
                </nav>
            </div>
            <div class="border-t border-grey-light px-8 py-4">
                <div class="flex justify-center text-grey">
                    <a class="block flex items-center hover:text-grey-darker mr-16"
                       href="https://github.com/kabbouchi/vue-tippy">
                        <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>
                                GitHub</title>
                            <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"/>
                        </svg>
                    </a>
                    <a class="block flex items-center hover:text-grey-darker" href="https://twitter.com/kabbouchi">
                        <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>
                                Twitter</title>
                            <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="flex flex-col md:ml-80 min-h-screen">
            <div class="fixed w-full z-20">
                <div class="pin-t bg-white md:hidden relative border-b border-grey-light h-12 flex items-center">
                    <div id="sidebar-open" class="absolute pin-l pin-y px-4 flex items-center">
                        <svg class="fill-current w-4 h-4 cursor-pointer text-grey" role="button"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </div>
                    <a href="/" class="mx-auto inline-flex items-center">
                        <img class="w-8 h-8" src="{{ $page->baseUrl }}/img/vue-tippy.png" alt="">
                    </a>
                    <div id="sidebar-close" class="hidden">
                        <div class="flex items-center absolute pin-r pin-y px-4">
                            <svg class="fill-current w-4 h-4 cursor-pointer text-grey" role="button"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content" class="flex-1 px-6 pb-8 pt-20 md:pt-16 w-full max-w-lg mx-auto">
                <div id="app" v-cloak>
                    <div class="markdown">
                        <h1>{{ $page->title }}</h1>
                        @if ($page->description)
                            <div class="text-xl text-grey-dark mb-4">
                                {{ $page->description }}
                            </div>
                        @endif
                        @if ($page->features)
                            @include('_partials.feature-badges', $page->features->all())
                        @endif
                        @yield('content')
                    </div>
                </div>

                <script src="/js/app.js"></script>
            </div>

            <div class="w-full bg-grey-lighter border-t border-grey-light px-8 py-4">
                <div class="flex justify-between text-grey" id="pagination">
                    @if($previous = $page->previous())
                        <a class="block flex items-center hover:text-grey-darker mr-16"
                           href="{{ $previous}}">
                            Previous
                        </a>
                    @else
                        <span></span>
                    @endif
                    @if($next = $page->next())
                        <a class="block flex items-center hover:text-grey-darker"
                           href="{{ $next }}">
                            Next
                        </a>
                    @endif

                </div>
            </div>

        </div>
    </div>

    <svg style="height: 0; width: 0; position: absolute; visibility: hidden;">
        <defs>
            <linearGradient x1="0%" y1="0%" y2="100%" id="logoGradient">
                <stop stop-color="#2383AE" offset="0%"></stop>
                <stop stop-color="#6DD7B9" offset="100%"></stop>
            </linearGradient>
        </defs>
    </svg>
@endsection

@push('scripts')
    @if ($page->production)
        <!-- Algolia DocSearch  -->
        {{--<script type="text/javascript" src="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js"></script>--}}
        {{--<script type="text/javascript">--}}
        {{--docsearch({--}}
        {{--apiKey: '',--}}
        {{--indexName: 'vue-tippy',--}}
        {{--inputSelector: '#docsearch',--}}
        {{--});--}}
        {{--</script>--}}
    @endif
@endpush