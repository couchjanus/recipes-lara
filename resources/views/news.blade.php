@extends('layouts.app')

@section('meta')
@endsection

@section('styles')

@endsection

@section('title')
@endsection

@section('content')
    <div class="content" id="root">
        <p>@{{ message }}</p>
        <example-component></example-component>
        <hr>
        <ul id="news">
            <li v-for="item in items">
                @{{ item.title }}
            </li>
        </ul>

    </div>
@endsection
