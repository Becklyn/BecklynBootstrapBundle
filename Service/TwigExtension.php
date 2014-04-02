<?php

namespace Becklyn\BootstrapBundle\Service;

use Symfony\Bridge\Twig\Form\TwigRenderer;
use Symfony\Component\DependencyInjection\ContainerInterface;

class TwigExtension extends \Twig_Extension
{
    /**
     * @var \Symfony\Component\DependencyInjection\ContainerInterface
     */
    private $container;



    /**
     * @param \Symfony\Component\DependencyInjection\ContainerInterface $container
     */
    public function __construct (ContainerInterface $container)
    {
        $this->container = $container;
    }



    //region Tests
    /**
     * Returns, whether the suffix is part of the string
     *
     * @param string $suffix
     * @param string $string
     *
     * @return bool
     */
    public function suffixOf ($suffix, $string)
    {
        return (string) $suffix === substr($string, -strlen($suffix));
    }


    /**
     * Returns all defined tests
     *
     * @return \Twig_Test[]
     */
    public function getTests ()
    {
        return [
            new \Twig_SimpleTest("suffixOf", [$this, "suffixOf"])
        ];
    }
    //endregion



    //region Functions
    /**
     * Renders a bootstrap flash list
     *
     * @param string $flashName
     *
     * @return mixed
     */
    public function bootstrapFlashList ($flashName = "messages")
    {
        /** @var $twig TwigRenderer */
        $twig = $this->container->get("templating");

        return $twig->render("@BecklynBootstrap/_partial/flash_bags.html.twig", [
            "flashName" => $flashName
        ]);
    }



    /**
     * Returns the defined functions
     *
     * @return \Twig_Function[]
     */
    public function getFunctions ()
    {
        return [
            new \Twig_SimpleFunction("bootstrapFlashList", [$this, "bootstrapFlashList"], ["is_safe" => ["html"]])
        ];
    }
    //endregion



    /**
     * Returns the name of the extension.
     *
     * @return string The extension name
     */
    public function getName ()
    {
        return __CLASS__;
    }
}