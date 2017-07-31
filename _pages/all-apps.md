---
layout: portal
permalink: /all-apps/
---

{% raw %}

<h2 class="page-header text-center">
<span ng-show="repoData"> {{ repoData.length }} </span>
Proxy Applications
</h2>

<div class="container">
    <div class="col-xs-6 col-xs-offset-3" style="padding-left: 25%">
        <input id="filterRepos" type="text" style="width: 70%" autofocus placeholder="Filter Applications">
    </div>
</div>

<section ng-show="repoData" id="repositories" class="flex-container">
    <div ng-repeat="repo in repoData | filter:searchText  | orderBy:predicate:reverse" class="flex-item {{repo.name}} {{repo.language}}">
        <h4 class="text-center">
        <a href="{{ repo.weburl }}"> {{ repo.name }} </a>
        <small>{{ repo.language }}</small>
        </h4>

        <p class="text-justify">{{ repo.shortdesc }} 

            <a ng-if="repo.weburl" href="{{ repo.weburl }}/">
                <span class="fa fa-globe"></span>
            </a>

            <a ng-if="repo.giturl" href="{{ repo.giturl }}">
                <span class="fa fa-github"></span>
            </a>
            
            <a ng-if="repo.tarballurl" href="{{ repo.tarballurl }}">
                <span class="fa fa-download"></span>
            </a>

        </p>
    </div>
</section>

{% endraw %}

<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<script src="/proxy-apps/js/applist-load.js"></script>
