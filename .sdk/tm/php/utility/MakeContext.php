<?php
declare(strict_types=1);

// Linear SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class LinearMakeContext
{
    public static function call(array $ctxmap, ?LinearContext $basectx): LinearContext
    {
        return new LinearContext($ctxmap, $basectx);
    }
}
