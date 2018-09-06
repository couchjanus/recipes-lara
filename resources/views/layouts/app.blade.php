@extends('layouts.base')

@section('navigation')
    @include('layouts.partials._nav')
@endsection
@section('page')
    @yield('content')
    @yield('aside')
@endsection
@section('footer')
    @include('layouts.partials._footer')
@endsection
