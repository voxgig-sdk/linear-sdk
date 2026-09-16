<?php
declare(strict_types=1);

// Linear SDK utility: result_body

class LinearResultBody
{
    public static function call(LinearContext $ctx): ?LinearResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
