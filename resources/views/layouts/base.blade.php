<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta name="description" content="">
    <meta name="author" content="">

    <title>{{ config('app.name', 'Laravel') }} - @yield('title')</title>

    @yield('meta')
    @include('layouts.partials._styles')
    @yield('styles')
</head>
<body class="@yield('body_class')">
    {{--Page--}}

        @yield('navigation')

        <!-- Page Content -->
        @yield('jumbotron')

        <main class="py-4">
            @yield('page')
        </main>

        @yield('footer')

        {{--Common Scripts--}}
        @include('layouts.partials._scripts')

        {{--Laravel Js Variables--}}
        @yield('adminscripts')

        {{--Scripts--}}
        @yield('scripts')

</body>
</html>
