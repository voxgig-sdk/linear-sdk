<?php
declare(strict_types=1);

// Linear SDK exists test

require_once __DIR__ . '/../linear_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = LinearSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
