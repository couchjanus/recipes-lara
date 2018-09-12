@extends('layouts.base')

@section('navigation')
    @include('layouts.partials._nav')
@endsection
@section('page')
    <div id="app">
        @yield('content')
        @yield('aside')
    </div>
@endsection
@section('footer')
    @include('layouts.partials._footer')
@endsection
