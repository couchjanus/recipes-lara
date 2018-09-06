@extends('layouts.base')

    @section('styles')
        <!-- Custom styles for this template -->
        <link href="{{ asset('css/dashboard.css') }}" rel="stylesheet">
    @endsection

    @section('navigation')
        @include('layouts.partials.admin._nav')
    @endsection

    {{--Page--}}
    @section('page')
      <div class="container-fluid">
        <div class="row">
          @include('layouts.partials.admin._sidebar')
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            @yield('content')
          </main>
        </div><!-- /.row -->
      </div>
    @endsection

    {{--Scripts--}}
    @section('adminscripts')
      @include('layouts.partials.admin._scripts')
    @endsection
